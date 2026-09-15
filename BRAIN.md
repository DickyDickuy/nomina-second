# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:** 
  1. **Remediasi 4 Blocker Kritis Production Readiness Selesai 100% (/boost):**
     - ESLint error di `ContactUsAbout.tsx` diperbaiki (`&apos;`) — `npm run lint` lulus 100% dengan 0 error.
     - HTTP Security Headers (`HSTS`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `CSP-Report-Only`) dan `poweredByHeader: false` aktif di `next.config.ts`.
     - Sliding window rate limiter in-memory zero-dependency di `src/lib/rate-limit.ts` terintegrasi pada Server Actions dengan background pruning throttling.
     - Validasi ketat upload CV di `src/lib/cv-validation.ts` dan `submit-application.ts`: pasangan ketat ekstensi, MIME type, dan 4-byte magic signature (`%PDF`, `PK\x03\x04`, `\xD0\xCF\x11\xE0`), pencegahan bypass nama file tanpa dot, dan limit ukuran 5MB.
     - Form feedback diperkuat di `ApplicationForm.tsx` dan `ContactUsForm.tsx` dengan pesan top-level dan error span untuk field `website`, `portfolio`, dan `salary`.
     - PocketBase auth token caching, single-flight auth deduplication mutex, dan timeout 10s via `AbortSignal.timeout` di `src/lib/pocketbase.ts`.
     - Health check route `/healthz` di `src/app/healthz/route.ts` dan probe update di `docker-compose.yml`.
  2. TypeScript typecheck (`npm run typecheck`) dan ESLint (`npm run lint`) lulus 100% dengan 0 error.
  3. Seluruh 7 rangkaian pengujian verifikasi mendalam di `scripts/verify-boost.mjs` (termasuk skenario serangan spoofing CV) lulus 100%.
  4. Status kesiapan rilis produksi: **READY TO DEPLOY**.
- **Fokus Utama:** Deploy build terbaru via Dokploy (`https://dokploy.nominanetwork.tech/`) dan verifikasi live service.
- **Next Steps:** 
  1. Deploy perubahan ke Dokploy (`https://dokploy.nominanetwork.tech/`).
  2. Verifikasi live endpoint `/healthz` dan HTTP response headers.
  3. Submit `sitemap.xml` ke Google Search Console dan request indexing homepage.

---

# Active Brainstorming
- **Penyelarasan Multi-Agent:** Menjaga agar aturan dan memori tetap sinkron di berbagai platform AI tanpa duplikasi berlebih.
- **Mekanisme Anti-Amnesia:** Menjaga `CHANGELOG.md` dan `BRAIN.md` selalu terupdate secara otomatis setelah setiap task/artifact selesai.
- **PocketBase Admin & Role Access:** Menilai apakah diperlukan user auth tambahan atau dashboard internal untuk review pelamar.

---

# Architectural Decisions
- **Framework & Core:** Next.js 16 (App Router) + React 19 + TypeScript (Strict Mode) untuk performa dan standar modern.
- **Styling & UI:** Tailwind CSS v4 + shadcn/ui (Radix primitives) + `cn()` utility untuk styling konsisten berbasis tokens `oklch`.
- **Backend & Database:** PocketBase (`https://db.nominanetwork.tech`) sebagai BaaS. Form lamaran menggunakan Next.js Server Actions (`src/actions/submit-application.ts`) dan otentikasi superuser server-side untuk memastikan kredensial tidak terekspos ke klien.
- **Single Source of Truth (SSOT) Rules:** `AGENTS.md` sebagai sumber utama aturan agen, dihubungkan ke `CLAUDE.md` dan `GEMINI.md` menggunakan pointer `@AGENTS.md`.
- **Persistent Memory Strategy:** `BRAIN.md` untuk status aktif/dinamis (short-to-medium memory) dan `CHANGELOG.md` untuk catatan historis/anti-regression (long-term memory).
