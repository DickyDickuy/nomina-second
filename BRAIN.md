# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:** 
  1. Migrasi video background `HeroSection` dari aset lokal 36MB (`/videos/special20-showreel-1080.mp4`) ke CDN Cloudinary (`https://res.cloudinary.com/v764bbhk/video/upload/v1787297781/special20-showreel-1080.mp4`) untuk pengiriman streaming cepat, hemat bandwidth, dan performa optimal.
  2. Mengeliminasi browser console warning GSAP (`GSAP target .tp-gsap-bg not found`) pada rute `/contact` dengan menambahkan guard/null check pengecekan elemen DOM di `src/hooks/useGsapAnimation.ts`.
  3. Optimasi Next.js `<Image fill>` pada grid gallery portfolio (`Skiper30.tsx`) dengan menambahkan `sizes` prop responsif untuk mengeliminasi browser warning dan mencegah download gambar berukuran penuh viewport.
  4. Integrasi PocketBase untuk Form Job Application (`/job-application`) selesai, mendukung upload file CV, Server Actions yang aman, dan kategorisasi dinamis dari halaman karir.
  5. Tombol CTA di `AboutSection` dan `ClientsSection` serta `TeamMobileCoverflow` 3D carousel mobile telah beroperasi stabil.
- **Fokus Utama:** Optimalisasi performa aset media, responsivitas mobile, dan kestabilan integrasi frontend-backend.
- **Next Steps:** Memonitor performa Core Web Vitals (LCP/CLS) pasca-migrasi video Cloudinary serta navigasi antar-halaman.

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
