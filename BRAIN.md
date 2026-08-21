# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:** 
  1. Audit SEO Semrush terselesaikan:
     - `src/app/robots.ts`: dibuat untuk mengizinkan crawler dan referensi dynamic sitemap.
     - `src/app/sitemap.ts`: dibuat untuk mendeteksi rute app router secara dinamis dengan tanggal modifikasi file.
     - `public/llms.txt`: dibuat sesuai konvensi standar llms.txt untuk AI & LLM crawling.
     - Eliminasi duplikasi meta description dan title tags di 10 rute dengan `generateMetadata` dinamis (mendukung parameter `jobId` di `/job-application`).
  2. Integrasi PocketBase untuk Form Job Application (`/job-application`) aktif dan stabil dengan Server Actions.
  3. Migrasi aset video HeroSection ke Cloudinary CDN serta optimasi sizes prop responsif pada portfolio gallery.
- **Fokus Utama:** Kualitas SEO on-page, indexing mesin pencari / LLM, dan performa halaman.
- **Next Steps:** Re-run Semrush Site Audit campaign untuk memvalidasi 0 error/warning pada sitemap, robots, llms.txt, dan duplikasi metadata.

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
