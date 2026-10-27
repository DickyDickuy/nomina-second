# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:**
  0. **Isolasi Transisi Halaman: Hanya Berjalan Jika Berpindah Halaman/Route Berbeda (Tuntas):**
     - Memperbaiki [PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx), [Navbar.tsx](file:///Users/dicky/Work/nomina-second/src/components/Navbar.tsx), [StaggeredMenu.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/StaggeredMenu/StaggeredMenu.tsx), dan [Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx).
     - Menjamin transisi 3-layer HANYA aktif jika `targetPath !== currentPath`.
     - Klik link anchor/section di landing page (`#about`, `#services`, `#clients`, `#special-20`), klik logo saat sudah di `/`, klik link footer yang merujuk ke halaman yang sedang dibuka, serta perubahan hash di browser history kini 100% TIDAK memicu transisi melainkan langsung melakukan smooth-scroll ke elemen tujuan.
  1. **Kalibrasi Kecepatan & Stagger Transisi Antar-Halaman (Tuntas):**
     - Durasi transisi `0.68s - 0.72s` dengan stagger `0.18s` dan hold `0.08s - 0.1s` agar warna Hitam, Abu Gelap, dan Nomina Oranye terlihat jelas.
  2. **Support Transisi Antar-Halaman untuk Tombol Browser Back & Forward (Tuntas):**
     - Menangani `popstate`, deteksi perubahan route saat history navigasi, `pageshow` (bfcache di Safari/mobile), serta `performance.getEntriesByType("navigation")[0].type === "back_forward"`.
  3. **Migrasi Warna Oranye ke `#fb5102` & Wordmark `NOMINA` Full-Display (Tuntas).**
  4. Verifikasi `npm run typecheck` dan `npm run lint` lulus (`0 errors, 23 warnings`).
- **Fokus Utama:** Konfirmasi user bahwa navigasi anchor section di landing page tidak lagi memicu transisi.

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
