# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:**
  0. **Feedback Audit & Fase 1 + Fase 2 + Services Motion (Selesai):**
     - **12 Slide 100% COMPLETE:** Slide 0, 1, 2, 4, 5, 7, 12, 14, 15, 16, 17, 18.
     - **Slide dengan Progress Aktif:** Slide 8 (85% — interactive spring hover accordion selesai), Slide 9 (70% — judul & struktur data URL selesai), Slide 11 (50% — judul The Visionaries selesai), Slide 3 (30% — pondasi motion aktif).
     - **Slide Sisa untuk Fase 3 & 4 (Motion):** Slide 6 (About Card/Logo Reveal), Slide 9 (Clients Radial Wheel), Slide 10 (Portfolio 3D Carousel), Slide 11 (Team Pixel Grid), Slide 13 (Careers Horizontal Accordion), Slide 3 (Seamless Scroll/Timer Transitions).
     - Dokumen perencanaan dan progress tracking diperbarui di artifact `IMPLEMENTATION_PLAN.md`.
     - `npm run check` lulus 100% tanpa error.
- **Fokus Utama:** **Fase 3** (Lanjut ke komponen motion berikutnya: Slide 6, 9, 10, 11, atau 13).
- **Menunggu dari user:** Daftar URL resmi 17 klien untuk melengkapi `CLIENT_HREFS` di `ClientsSection.tsx`.

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
