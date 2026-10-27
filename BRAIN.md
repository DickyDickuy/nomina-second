# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:**
  0. **Slide 11 (`The Visionaries`) Tuntas — Unified Originkit 3D Coverflow + Pixelated & Greyscale Effect:**
     - **Penyatuan Desktop & Mobile:** Menghapus pemisahan versi desktop (grid 2 kolom + floating hover image) dan mobile (`TeamMobileCoverflow`), digantikan oleh komponen tunggal [Smooth3DSlideshow.tsx](file:///Users/dicky/Work/nomina-second/src/components/team/Smooth3DSlideshow.tsx) di [TeamSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/team/TeamSection.tsx).
     - **Efek Pixelated & Greyscale (`!isActive`) → Sharp Full Color (`isActive`):** Menggunakan `<PixelatedSlideImage>` canvas yang merender kartu di luar tengah dalam kondisi greyscale dan piksel kotak tajam (`imageSmoothingEnabled = false`, `image-rendering: pixelated`), lalu secara mulus menghilangkan piksel dan mengembalikan warna asli saat kartu berada di tengah (`isActive`).
     - **Teks Nama & Posisi Hanya di Kartu Tengah:** Overlay nama (`slide.title`) dan jabatan (`slide.role`) hanya muncul ketika kartu berada di tengah (`opacity: isActive ? 1 : 0`).
  1. Seluruh 19 slide feedback (Slide 0 s/d 18) kini telah selesai 100%.
  2. `npm run check` (`eslint`, `tsc --noEmit`, dan `next build`) lulus 100% dengan 0 error.
- **Fokus Utama:** Konfirmasi hasil visual `The Visionaries` di halaman `/about` bersama user.
- **Menunggu dari user:** Feedback visual atau instruksi lanjutan.

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
