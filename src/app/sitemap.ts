import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

interface RouteItem {
  route: string;
  lastModified: Date;
}

function getAppRoutes(dir: string, baseDir: string = dir): RouteItem[] {
  let routes: RouteItem[] = [];

  if (!fs.existsSync(dir)) {
    return routes;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Ignore private folders (_folder), hidden folders (.dir), and parallel routes (@slot)
      if (
        entry.name.startsWith("_") ||
        entry.name.startsWith(".") ||
        entry.name.startsWith("@")
      ) {
        continue;
      }
      routes = routes.concat(getAppRoutes(fullPath, baseDir));
    } else if (entry.isFile()) {
      // Match Next.js App Router page files
      if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
        const relativeDir = path.relative(baseDir, dir);

        // Filter out Next.js route groups like (agntix), (marketing), etc.
        const segments = relativeDir
          .split(path.sep)
          .filter(
            (segment) =>
              segment.length > 0 &&
              !segment.startsWith("(") &&
              !segment.startsWith("@")
          );

        const route = segments.length === 0 ? "" : `/${segments.join("/")}`;
        const stats = fs.statSync(fullPath);

        routes.push({
          route: route === "" ? "/" : route,
          lastModified: stats.mtime,
        });
      }
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://landing.nominanetwork.tech";

  const appDir = path.join(process.cwd(), "src", "app");
  const fallbackAppDir = path.join(process.cwd(), "app");
  const targetDir = fs.existsSync(appDir) ? appDir : fallbackAppDir;

  const rawRoutes = getAppRoutes(targetDir);

  // Deduplicate routes by path
  const uniqueRoutesMap = new Map<string, Date>();
  for (const { route, lastModified } of rawRoutes) {
    if (!uniqueRoutesMap.has(route)) {
      uniqueRoutesMap.set(route, lastModified);
    }
  }

  const routes = Array.from(uniqueRoutesMap.entries()).map(
    ([route, lastModified]) => ({
      route,
      lastModified,
    })
  );

  // Sort routes: homepage first, then alphabetical
  routes.sort((a, b) => {
    if (a.route === "/") return -1;
    if (b.route === "/") return 1;
    return a.route.localeCompare(b.route);
  });

  return routes.map(({ route, lastModified }) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1.0 : 0.8,
  }));
}
