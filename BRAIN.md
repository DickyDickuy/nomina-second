# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:**
  0. **Kalibrasi Kecepatan & Stagger Transisi Antar-Halaman (Tuntas):**
     - Memperlambat durasi animasi transisi di [PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx) dari `0.32s - 0.42s` menjadi `0.68s - 0.72s` dengan stagger diperlebar dari `0.065s` ke `0.18s`.
     - Ditambahkan jeda hold `0.08s - 0.1s` pada layer warna teratas `#fb5102` Nomina Orange sebelum membuka/menavigasi.
     - Setiap pita warna (#000000 Black → #333333 Dark Gray → #fb5102 Orange) kini terlihat jelas bergerak secara berurutan dan elegan baik saat klik link maupun saat menekan tombol Back/Forward di browser.
  1. **Support Transisi Antar-Halaman untuk Tombol Browser Back & Forward (Tuntas):**
     - Menangani `popstate`, deteksi perubahan route saat history navigasi, `pageshow` (bfcache di Safari/mobile), serta `performance.getEntriesByType("navigation")[0].type === "back_forward"`.
  2. **Migrasi Warna Oranye ke `#fb5102` & Wordmark `NOMINA` Full-Display (Tuntas).**
  3. Verifikasi `npm run typecheck` dan `npm run lint` lulus (`0 errors, 23 warnings`).
- **Fokus Utama:** Menunggu feedback user atas timing dan visibilitas ketiga warna transisi.

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
