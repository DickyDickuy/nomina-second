# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:** 
  1. Remediasi Audit Ponytail Security & Minimalist Architect terselesaikan:
     - Kredensial fallback hardcoded di `src/lib/pocketbase.ts` dan `scripts/setup-pocketbase.mjs` telah dihapus (fail-closed security).
     - Error messages internal di server actions (`submit-application.ts`, `submit-contact.ts`) telah dimasking untuk mencegah kebocoran informasi backend (CWE-209).
     - Formulir `ApplicationForm.tsx` dan `ContactUsForm.tsx` direfaktor ke React 19 `useActionState` native hook, menghilangkan state boilerplate yang redundan.
     - Server action dan PocketBase schema untuk formulir kontak (`submit-contact.ts`, collection `contact_submissions`) aktif.
     - Template konfigurasi `.env.example` telah dibuat.
  2. Semua checks (ESLint, TypeScript `tsc --noEmit`, Next.js build) lulus 100% tanpa error.
- **Fokus Utama:** Kualitas keamanan, kebersihan kode (YAGNI), integrasi PocketBase, dan kesiapan deploy ke Dokploy.
- **Next Steps:** Pastikan environment variables (`POCKETBASE_URL`, `POCKETBASE_ADMIN_EMAIL`, `POCKETBASE_ADMIN_PASSWORD`) diset di Dokploy sebelum deployment produksi.

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
