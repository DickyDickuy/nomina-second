// ponytail: in-memory sliding window rate limiter without external dependencies
// Tracks timestamps per key and prunes expired entries on access

interface RateLimitOptions {
  limit?: number;
  windowMs?: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

const store = new Map<string, number[]>();
let lastPruned = Date.now();

export function rateLimit(key: string, options: RateLimitOptions = {}): RateLimitResult {
  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 10 * 60 * 1000; // 10 minutes
  const now = Date.now();
  const windowStart = now - windowMs;

  const timestamps = (store.get(key) || []).filter((t) => t > windowStart);

  // Throttled periodic pruning of stale keys (at most once every 60s or when map exceeds 1000 items)
  if ((now - lastPruned > 60_000 && store.size > 100) || store.size > 1000) {
    lastPruned = now;
    for (const [k, ts] of store.entries()) {
      const valid = ts.filter((t) => t > windowStart);
      if (valid.length === 0) {
        store.delete(k);
      } else {
        store.set(k, valid);
      }
    }
  }

  if (timestamps.length >= limit) {
    store.set(key, timestamps);
    return {
      success: false,
      limit,
      remaining: 0,
      reset: timestamps[0] + windowMs,
    };
  }

  timestamps.push(now);
  store.set(key, timestamps);

  return {
    success: true,
    limit,
    remaining: limit - timestamps.length,
    reset: timestamps[0] + windowMs,
  };
}
