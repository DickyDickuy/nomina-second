# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:**
  0. **Migrasi Hero Title Halaman Non-Landing (`/contact`, `/career`, `/portfolio`, `/job-application`) ke Brand Font Nasalization (Tuntas):**
     - Mengganti font legacy `dirtyline-36daysoftype-2022` (font serif dengan karakter 'O' meliuk kaligrafi dan warna `#ff3800`) pada [LightPageHero.module.css](file:///Users/dicky/Work/nomina-second/src/components/hero-banner/LightPageHero.module.css) dan [Skiper30.module.css](file:///Users/dicky/Work/nomina-second/src/components/portfolio/Skiper30.module.css) menjadi font brand utama `var(--font-heading), 'Nasalization', sans-serif` dan warna resmi `#fb5102`.
     - Memperbarui teks JSX menjadi uppercase murni (`CONTACT` pada [ContactLightHero.tsx](file:///Users/dicky/Work/nomina-second/src/components/hero-banner/ContactLightHero.tsx), `CAREER` pada [CareerLightHero.tsx](file:///Users/dicky/Work/nomina-second/src/components/hero-banner/CareerLightHero.tsx), `APPLICATION` pada [JobApplicationHero.tsx](file:///Users/dicky/Work/nomina-second/src/components/hero-banner/JobApplicationHero.tsx), dan `PORTOFOLIO` pada [Skiper30.tsx](file:///Users/dicky/Work/nomina-second/src/components/portfolio/Skiper30.tsx)).
     - Menambahkan breakpoint CSS mobile responsive (`font-size: min(12vw, 56px)`) sehingga teks berukuran besar tetap presisi, proporsional, dan tidak overflow di mobile viewport.
     - Memetakan ulang `$font-family: ('ff': ('dirtyline': ...))` di [_typography.scss](file:///Users/dicky/Work/nomina-second/public/assets/scss/utils/_typography.scss) ke Nasalization.
     - Verifikasi `npm run typecheck` dan `npm run build` lulus 100% tanpa error.
  1. **Perbaikan Mobile View `/portfolio` & Eliminasi 1-Frame Glitch pada `PageTransition` (Tuntas).**
  2. **Isolasi Transisi Halaman: Hanya Berjalan Jika Berpindah Halaman/Route Berbeda (Tuntas).**
  3. **Kalibrasi Kecepatan & Stagger Transisi Antar-Halaman + Support Browser Back/Forward (Tuntas).**
  4. **Migrasi Warna Oranye ke `#fb5102` & Wordmark `NOMINA` Full-Display (Tuntas).**
- **Fokus Utama:** Menunggu feedback visual dari user terkait tampilan hero title berfont Nasalization pada halaman `/contact`, `/career`, dan `/portfolio`.

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
