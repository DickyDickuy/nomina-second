# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:** 
  1. **SEO Remediation Komprehensif selesai dikerjakan:**
     - `src/app/layout.tsx`: Ditambahkan `metadataBase`, `title.template` (`%s | NOMINA Communication`), `keywords`, `authors`, `creator`, `publisher`, `robots` (termasuk directive `googleBot` eksplisit), `alternates.canonical`, `openGraph` (OG:title, description, url, siteName, locale, images), dan `twitter` card metadata.
     - `src/app/page.tsx`: Ditambahkan `openGraph`, `twitter`, `alternates.canonical`, dan JSON-LD `Organization` structured data (`@type: Organization` dengan `name`, `alternateName`, `url`, `logo`, `foundingDate`, `address`, `contactPoint`).
     - Semua 7 halaman inner (`/about`, `/career`, `/career-3d-designer`, `/career-account-executive`, `/contact`, `/portfolio`, `/job-application`) telah mendapatkan `openGraph`, `twitter`, dan `alternates.canonical` yang lengkap dan unik per halaman.
     - `generateMetadata` di `/job-application/page.tsx` diperluas: semua 3 variant (default, 3d-designer, account-executive) kini memiliki OG, Twitter, dan canonical.
  2. TypeScript typecheck lulus 100% tanpa error.
- **Fokus Utama:** Deploy perubahan ke production (Dokploy), lalu submit ke Google Search Console untuk indexing.
- **Next Steps:** 
  1. Deploy build terbaru ke `landing.nominanetwork.tech`.
  2. Login ke Google Search Console → tambahkan property → submit `sitemap.xml` → gunakan URL Inspection untuk request indexing homepage.
  3. Verifikasi tag OG di [opengraph.xyz](https://www.opengraph.xyz) dan JSON-LD di [Google Rich Results Test](https://search.google.com/test/rich-results).

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
