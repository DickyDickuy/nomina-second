# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:** 
  0. **Feedback Deck Audit & Fase 1 Foundation (Selesai):**
     - Mengaudit seluruh 19 slide di `feedback_screenshot/` (`0.jpg`–`18.jpg`) dan memetakannya ke dalam rencana berurutan di `IMPLEMENTATION_PLAN.md`.
     - **Fase 1 Selesai:** Mengintegrasikan font lokal `Nasalization Rg.otf` (`--font-heading`) dan `AspektaVF.woff2` (`--font-body`) di [layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx), [globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css), dan [_typography.scss](file:///Users/dicky/Work/nomina-second/public/assets/scss/utils/_typography.scss), serta memperbarui palet warna brand (`#E85002`, `#FB5102`, `#000000`, `#F9F9F9`, `#646464`, `#A7A7A7`, `#333333`, `#CDCDCB`, `#1C1E2A`) dan 4-stop brand gradient di [globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css), [agntix-globals.scss](file:///Users/dicky/Work/nomina-second/src/app/(agntix)/agntix-globals.scss), [_colors.scss](file:///Users/dicky/Work/nomina-second/public/assets/scss/utils/_colors.scss), [Navbar.tsx](file:///Users/dicky/Work/nomina-second/src/components/Navbar.tsx), dan [Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx). `npm run check` lulus 100%.
  1. **Career Detail Pages & Metadata Update (Selesai):**
     - Dibuat [CareerProjectManagerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/CareerProjectManagerMain.tsx), [CareerProductionManagerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/CareerProductionManagerMain.tsx), dan [CareerSalesAccountManagerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/CareerSalesAccountManagerMain.tsx) dengan copy Inggris, deadline dinamis +14 hari, route `/career-project-manager`, `/career-production-manager`, `/career-sales-account-manager`.
- **Fokus Utama:** Melanjutkan ke **Fase 2** (Copywriting, Struktur Data, Komponen Spesifik & Migrasi Rute `/career-3d-visualizer` sesuai Slide 4, 5, 7, 9, 11, 12, 14–18), dilanjutkan ke **Fase 3** (Interactive Motion Components) dan **Fase 4** (Seamless Section Transitions).
- **Next Steps:** 
  1. **Fase 2:** Eksekusi revisi `WeatherWidget.tsx` & `HeroSection.tsx` (Slide 4), copywriting `AboutSection.tsx` (Slide 5), `ServicesSection.tsx` (Slide 7), `ClientsSection.tsx` (Slide 9), `TeamSection.tsx` (Slide 11), serta migrasi penuh `/career-3d-visualizer` + update copy & jam kerja di seluruh halaman detail karir (Slide 12, 14–18).
  2. **Fase 3:** Implementasi komponen interaktif & motion sesuai referensi di Slide 6, 8, 9, 10, 11, 13.
  3. **Fase 4:** Orkestrasi transisi antar-seksi (scroll + timer) sesuai Slide 3 dan verifikasi build.

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
