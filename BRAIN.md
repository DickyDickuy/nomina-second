# 🧠 BRAIN.md — Persistent Agent Memory

Sistem memori persisten dinamis untuk melacak konteks aktif, brainstorming, dan keputusan arsitektur di seluruh sesi AI.

---

# Current Context & Focus
- **Status Saat Ini:** 
  1. **Integrasi Komponen Shared Element Gallery (`/portfolio` - Selesai):**
     - Mengimplementasikan komponen primitif [shared-element-gallery.tsx](file:///Users/dicky/Work/nomina-second/src/components/ui/shared-element-gallery.tsx) di folder `src/components/ui/` berbasis React 19, Framer Motion, dan Tailwind CSS dengan animasi spring physics dan shared-element morphing (`layoutId`), modal backdrop blur, dan drag-to-dismiss.
     - Merestorasi penuh Hero Spacer section bawaan halaman portofolio di [Skiper30.tsx](file:///Users/dicky/Work/nomina-second/src/components/portfolio/Skiper30.tsx) (`portOfolio` H1 + background + scroll down text indicator) dan mengintegrasikan masonry gallery shared-element di bawahnya tanpa label tambahan.
     - Mengubah kontainer galeri menjadi fluid full-bleed desktop (`max-w-[2160px]` dengan padding responsif `px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16` dan gap dinamis `gap-4 md:gap-6 xl:gap-8`), menghilangkan ruang kosong di sisi kiri-kanan desktop dan membuat ukuran foto 40%-65% lebih besar memenuhi layar.
     - Mengimplementasikan interactive orange circle cursor tooltip (`styles.cursorCircle`) dengan physics spring halus yang melayang mengikuti kursor saat hover untuk menampilkan nama event, dan otomatis fade-out & scale-down seketika saat foto diklik agar fokus murni pada modal fullscreen.
     - Memperbaiki tipografi cursor circle: menghapus pemenggalan kata di tengah (`word-wrap: break-word`), memperbesar diameter ke 140px, mengaktifkan `text-wrap: balance`, `word-break: normal`, `hyphens: none`, dan ukuran font adaptif sehingga teks panjang tidak lagi terpotong aneh atau tumpah.
     - Memperbarui seluruh format file gambar portofolio di [Skiper30.tsx](file:///Users/dicky/Work/nomina-second/src/components/portfolio/Skiper30.tsx) menjadi `.webp` (total 22 foto aktif termasuk 5 foto event baru).
     - Menata ulang urutan 22 gambar menjadi susunan ritmik berselang-seling (*alternating weave*: `Portrait -> Landscape -> Portrait -> Landscape`) di setiap kolom, mengeliminasi penumpukan foto sejenis (menghapus tumpukan 4 landscape di kolom terakhir), dan menyeimbangkan tinggi kolom (~6.0 unit per kolom) sehingga rata dan tidak ada ruang kosong di bagian bawah.
     - Menaikkan posisi footer dengan mengurangi padding galeri dari `pb-28` ke `pb-4 md:pb-6` di [Skiper30.tsx](file:///Users/dicky/Work/nomina-second/src/components/portfolio/Skiper30.tsx) serta menyematkan negative margin `relative z-10 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20` pada `CreativeAgencyFooter` di [PortfolioShowcaseMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/portfolios/portfolio-showcase/PortfolioShowcaseMain.tsx), sehingga footer memotong (*crop*) celah kosong di bawah kolom secara rapi dan presisi.
     - Mengimplementasikan skeleton loading pada [shared-element-gallery.tsx](file:///Users/dicky/Work/nomina-second/src/components/ui/shared-element-gallery.tsx): frame abu-abu (`bg-neutral-200 dark:bg-neutral-800`) dengan animasi shimmer sebelum gambar terunduh, serta gambar disembunyikan murni (`opacity-0`) hingga event `onLoad` selesai lalu fade-in halus (`duration-300`).
  2. **Perbaikan Layout & Video Hero (Selesai):**
     - **Statement Section Line-Height & Spacing:** Menghapus `line-height: inherit;` pada selector `#nomina-home h1..h6` di `src/app/globals.css` yang menimpa `leading-[0.92]` dan menyebabkan jarak baris antar-kata di `WE DESIGN COMMUNICATION ECOSYSTEMS.` menjadi renggang raksasa (~95px), serta menambahkan `lineHeight: 0.88` inline pada [StatementSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/StatementSection.tsx) beserta margin proporsional.
     - **About Section Text Centering:** Menghapus `margin: 0 !important;` pada `#nomina-home p` di `src/app/globals.css` yang menimpa `mx-auto`, serta menambahkan `flex flex-col items-center` pada [AboutSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/AboutSection.tsx) sehingga teks paragraf tidak lagi tergeser ~100px ke kiri dan berada tepat di tengah layar.
     - **Navbar Centering:** Posisi menu navigasi desktop di `src/components/Navbar.tsx` (`ABOUT`, `ARCHIVE`, `SERVICES`, `CLIENTS`, `CAREERS`, `CONTACT`, `PORTOFOLIO`) telah diatur persis di tengah secara horizontal menggunakan `absolute left-1/2 -translate-x-1/2 h-full z-10`, menghilangkan ketidakseimbangan posisi yang sebelumnya condong ke kanan akibat lebar logo di sisi kiri.
     - **Hero Video Vignette:** Menghapus div overlay scrim gradient vignette (`from-black/50 via-transparent to-black/60`) dan mengembalikan `opacity` video hero ke 100% natural di `src/components/HeroSection.tsx`.
  2. **Revisi Landing Page & Inner Pages Nomina (MoM 24 Sep 2026 — Misi 1, 2, 4, 5, 6, 7) Selesai 100%:**
     - **Misi 1 (Services):** Item `"Strategy Branding"` dihapus sepenuhnya; urutan `SERVICES` di `ServicesSection.tsx` diperbarui menjadi: `Event Organiser`, `Technical Custom Production`, `Rental Equipment`, `Web Development`, `SaaS Management`.
     - **Misi 2 (Careers):** Rute & komponen `Account Executive` dihapus; `3D Designer` diubah menjadi `3D Visualisation` (`/career-3d-visualisation` dengan redirect permanen dari `/career-3d-designer`); posisi `Project Manager`, `Production Manager`, `Sales and Account Manager`, dan `3D Visualisation` aktif di seluruh halaman karir, form aplikasi, dan footer; informasi `Salary` pada sidebar detail karir disesuaikan menjadi `Competitive & Negotiable (Based on Experience & Portfolio)`.
     - **Misi 4 (Job Summary Highlight):** `Job Summary` di halaman detail karir (`CareerDetailsDynamic.tsx`) tampil menonjol sebagai callout utama dengan left-border `#FF3800` dan ukuran font setara heading (`clamp(22px, 2.4vw, 28px)`).
     - **Misi 5 (Tipografi & Heading Semantik):** Seluruh halaman selain landing page (`/about`, `/portfolio`, `/career`, `/career-3d-visualisation`, `/job-application`, `/contact`) memiliki tepat 1 `<h1>` (`data-on-scroll="0"` untuk animasi masuk langsung saat page load) dan urutan `<h2> -> <h3>` tanpa lompatan level, dilengkapi animasi scroll GSAP (`animationConfig.ts`) dan hover micro-interaction.
     - **Misi 6 (Local SEO Jakarta):** Metadata seluruh rute utama, H1 homepage, alt text gambar, serta structured data JSON-LD (`LocalBusiness`, `ProfessionalService`, `EventVenue`, `OfferCatalog`) telah dioptimasi untuk keyword lokal (`EO Jakarta`, `EO terdekat`, `jasa event organizer Jakarta`).
     - **Misi 7 (Interactive Map):** Peta statis iframe di halaman Contact digantikan dengan peta interaktif `react-leaflet` (`NominaInteractiveMap.tsx` + `NominaMapInner.tsx`) berbasis tile OpenStreetMap tanpa watermark dengan filter monokrom pada `.leaflet-tile-pane`, custom pin `#FF3800`, popup alamat + tombol `"Get Directions"`, dan smooth `flyTo` saat masuk viewport.
  3. Remediasi Production Readiness (/boost) tetap terjaga dan lulus `npm run check` (`lint`, `typecheck`, `build`).
- **Fokus Utama:** Deploy build terbaru ke Dokploy (`https://dokploy.nominanetwork.tech/`) dan memverifikasi tampilan responsif di production.
- **Next Steps:** 
  1. Deploy perubahan ke Dokploy (`https://dokploy.nominanetwork.tech/`).
  2. Verifikasi live sitemap (`/sitemap.xml`), redirect `/career-3d-designer` -> `/career-3d-visualisation`, dan tampilan peta interaktif di `/contact`.
  3. Buat halaman detail karir terpisah untuk 3 posisi baru jika dokumen requirement HR sudah tersedia.

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
