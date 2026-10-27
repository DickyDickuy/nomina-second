# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:**
  0. **Penyelarasan 1:1 Career Coverflow Sesuai Referensi Skiper49:**
     - **Navigasi Shortest-Path Circular Loop (Tuntas):** Mengganti `slideToLoop(idx)` dengan `handleDotClick` berbasis shortest path. Sekarang jika sedang di gambar 4 dan mengklik titik gambar 1, slider langsung bergeser **ke kanan 1 kali** (`slideNext()`), dan jika di gambar 1 mengklik gambar 4, slider langsung bergeser **ke kiri 1 kali** (`slidePrev()`). Tidak ada lagi perputaran mundur 3x yang canggung.
     - **Navigasi Bulat Sempurna (True Circles):** 4 titik bulat kontras tinggi yang jelas terlihat di atas latar putih.
     - **Bentuk Kartu Persegi Tajam (Square):** Sudut siku-siku tajam 90° murni (`width: 300px; height: 300px;`) tanpa `border-radius`.
     - **Hover Zoom Dihapus:** Gambar kartu tetap diam dan statis saat kursor diarahkan.
     - **Tepat Hanya 3 Kartu yang Tampil:** Kontainer `max-w-4xl px-5` (896px) dengan ukuran slide `300px × 300px`, rotasi `40°`, depth `100`, dan `stretch: 0`.
  1. `tsc --noEmit`, `eslint`, dan `npm run build` lulus 100% dengan 0 error.
- **Fokus Utama:** Konfirmasi kepuasan navigasi loop dots bersama user di browser `localhost:3000/career`.
- **Menunggu dari user:** Feedback visual atas transisi 1-langkah navigasi titik loop di `/career`.

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
