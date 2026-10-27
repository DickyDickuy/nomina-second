# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:**
  0. **Perbaikan Mobile View `/portfolio` & Eliminasi 1-Frame Glitch pada `PageTransition` (Tuntas):**
     - **Mobile `/portfolio` ([CircularGallery.tsx](file:///Users/dicky/Work/nomina-second/src/components/portfolio/CircularGallery.tsx), [Skiper30.tsx](file:///Users/dicky/Work/nomina-second/src/components/portfolio/Skiper30.tsx), [Skiper30.module.css](file:///Users/dicky/Work/nomina-second/src/components/portfolio/Skiper30.module.css)):** Memperbaiki kalkulasi radius busur (`H = Math.max(this.viewport.width / 2, 18)` dan `effectiveBend = 1.8` di mobile) agar kartu tidak lagi miring ekstrem `~60°` dan bertabrakan di layar portrait mobile. Menambahkan proporsi ukuran kartu khusus mobile serta method `Title.onResize()` agar teks judul di bawah kartu memiliki rasio 1:1 yang tajam dan tidak pernah melebihi lebar kartu (`<= 92%`).
     - **Zero-Flash `PageTransition` ([layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx), [PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx)):** Menghilangkan bug 1-frame background pop-up yang disebabkan oleh konflik CSS `!important` dengan cache `_gsap` dan inline style React. Kini `tl.fromTo(..., { immediateRender: true })` mengunci inline transform `0%` secara sinkron sebelum atribut `data-pt-covered` dilepas, ditambah pelindung `html[data-pt-covered="true"]::before` berwarna `#fb5102`.
  1. **Isolasi Transisi Halaman: Hanya Berjalan Jika Berpindah Halaman/Route Berbeda (Tuntas).**
  2. **Kalibrasi Kecepatan & Stagger Transisi Antar-Halaman + Support Browser Back/Forward (Tuntas).**
  3. **Migrasi Warna Oranye ke `#fb5102` & Wordmark `NOMINA` Full-Display (Tuntas).**
  4. Verifikasi `npm run typecheck` dan `npm run lint` lulus (`0 errors, 23 warnings`).
- **Fokus Utama:** Menunggu konfirmasi visual dari user untuk tampilan mobile `/portfolio` dan mulusnya transisi halaman tanpa glitch.

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
