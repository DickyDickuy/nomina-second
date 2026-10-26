# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:** 
  0. **Career Detail Pages & Metadata Update (Selesai):**
     - Dibuat [CareerProjectManagerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/CareerProjectManagerMain.tsx), [CareerProductionManagerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/CareerProductionManagerMain.tsx), dan [CareerSalesAccountManagerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/CareerSalesAccountManagerMain.tsx) dengan copy Inggris, deadline dinamis +14 hari, route `/career-project-manager`, `/career-production-manager`, `/career-sales-account-manager`.
     - Metadata title halaman Project Manager diperbarui menjadi `"Hiring: Project Manager (Jakarta) | NOMINA Creative"`.
     - Form lamaran: label portfolio yang sebelumnya tech-centric (`Behance, Dribbble, GitHub`) disesuaikan menjadi `LinkedIn Profile or Portfolio Link (LinkedIn, Instagram, Drive, etc.)`.
     - Mobile hero ala pilcommunication.com: layar putih, video 16:9 di tengah, logo/Menu/tagline berwarna gelap; desktop tetap video fullscreen. Ikon plus diganti burger 3 garis yang morph jadi X.
     - Open Roles di halaman Career dan kedua footer mengarah ke halaman detail; form lamaran dan server action mendukung ketiga `job_id`. `npm run check` lulus.
  1. **Quick Fixes & UI Cleanup (Selesai):**
     - **Statement Section Typography & English Copywriting:** Translated the copywriting in [StatementSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/StatementSection.tsx) to English (`"10 Years of Building Events and Brands in Jakarta"` and `"For 10 years, NOMINA Creative has been the event organizer of choice in Jakarta..."`), removed all em dashes (`—`), and unified font styling to match [AboutSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/AboutSection.tsx) (`var(--font-body)` News Cycle, `font-weight: 700`, `fontSize: clamp(1rem, 2vw, 1.25rem)`, solid `#000000`). Protected with `#nomina-home h3:not(.font-body)` in [globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css).
     - **LinkedIn Link Update:** Seluruh tautan LinkedIn yang sebelumnya rusak 404 (`nomina-indonesia` dan URL generik) telah diperbarui ke profil resmi aktif: `https://www.linkedin.com/company/nominacreative/home/` di [Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx), [FooterSocialIcons.tsx](file:///Users/dicky/Work/nomina-second/src/layouts/footers/subComponents/FooterSocialIcons.tsx), JSON-LD homepage di [page.tsx](file:///Users/dicky/Work/nomina-second/src/app/page.tsx), dan menu sosial inner pages.
     - **Careers 3D Dynamic Deadline:** Tanggal deadline pada halaman `/career-3d-visualisation` ([Career3dDesignerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/Career3dDesignerMain.tsx)) telah diubah dari tanggal lampau `31 Aug 2026` menjadi tepat 2 minggu dari hari ini (`26 Oct 2026`) menggunakan kalkulasi dinamis (`+14 hari` saat render) dan tanggal publikasi `12 Oct 2026`, dengan `suppressHydrationWarning` pada [CareerDetailsDynamic.tsx](file:///Users/dicky/Work/nomina-second/src/components/career/CareerDetailsDynamic.tsx).
     - **Tetris Removal:** Strip animasi self-playing Tetris putih 80px telah dihilangkan dari [Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx) sehingga footer tampil bersih, minimalis, dan elegan.
     - **Build Verification:** Seluruh pengujian `npm run lint`, `npm run typecheck`, dan `npm run build` lulus 100% tanpa error.
  2. **Brand Identity & Favicon Suite Refresh (Selesai):**
     - Mengganti representasi logo teks lama (`"nomina."` + `"10 YEARS OF PEOPLE."`) di [NominaLogo](file:///Users/dicky/Work/nomina-second/src/components/icons.tsx) dan `NominaLogoDark` dengan aset emblem 3D layered resmi [nomina_logo.png](file:///Users/dicky/Work/nomina-second/public/nomina_logo.png).
     - Menyesuaikan proporsi logo di [HeroSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/HeroSection.tsx) (`h-10 md:h-11`) dan [Navbar.tsx](file:///Users/dicky/Work/nomina-second/src/components/Navbar.tsx) (`h-9`), serta menghapus legacy CSS scaling transform (`scale-[0.55]`).
     - Men-generate suite favicon lengkap multi-ukuran (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon.png`, `apple-icon.png`) dan mengintegrasikannya ke metadata [layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx).
  3. **Integrasi Komponen Shared Element Gallery (`/portfolio` - Selesai):**
     - Mengimplementasikan komponen primitif [shared-element-gallery.tsx](file:///Users/dicky/Work/nomina-second/src/components/ui/shared-element-gallery.tsx) berbasis React 19, Framer Motion, dan Tailwind CSS.
  4. **Perbaikan Layout & Video Hero (Selesai):**
     - Penyesuaian line-height Statement section, centering About section, centering navigasi Navbar desktop, dan penghapusan video vignette.
  5. **Revisi Landing Page & Inner Pages Nomina (MoM 24 Sep 2026 — Misi 1, 2, 4, 5, 6, 7) Selesai 100%.**
- **Fokus Utama:** Deploy build terbaru ke Dokploy (`https://dokploy.nominanetwork.tech/`) dan memverifikasi tampilan responsif di production.
- **Next Steps:** 
  1. Deploy perubahan ke Dokploy (`https://dokploy.nominanetwork.tech/`).
  2. Verifikasi live sitemap (`/sitemap.xml`), redirect `/career-3d-designer` -> `/career-3d-visualisation`, dan tampilan peta interaktif di `/contact`.
  3. Buat halaman detail karir terpisah untuk 3 posisi baru jika dokumen requirement HR sudah tersedia.

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
