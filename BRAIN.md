# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:** 
  1. Mengeliminasi browser console warning GSAP (`GSAP target .tp-gsap-bg not found`) pada rute `/contact` dengan menambahkan guard/null check pengecekan elemen DOM di `src/hooks/useGsapAnimation.ts`.
  2. Optimasi Next.js `<Image fill>` pada grid gallery portfolio (`Skiper30.tsx`) dengan menambahkan `sizes` prop responsif untuk mengeliminasi browser warning dan mencegah download gambar berukuran penuh viewport.
  3. Integrasi PocketBase untuk Form Job Application (`/job-application`) selesai, mendukung upload file CV, Server Actions yang aman, dan kategorisasi dinamis dari halaman karir (`/career-account-executive`, `/career-3d-designer`).
  4. Tombol CTA *Discover more* di `AboutSection` diarahkan ke `/about`, tombol CTA *Discover all clients* di `ClientsSection` diarahkan ke `/portfolio`, dan `TeamMobileCoverflow` 3D carousel mobile telah diterapkan.
- **Fokus Utama:** Menjaga kebersihan console browser dari error/warning GSAP & Image, optimalisasi performa aset, dan kestabilan integrasi form.
- **Next Steps:** Memonitor navigasi antar-halaman di browser dan menunggu keputusan terkait arsitektur hosting video (MinIO/CDN vs Embed).

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
