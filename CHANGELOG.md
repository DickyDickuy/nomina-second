# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### [Fixed]
- **Statement Section Line-Height & Spacing Fix (`src/app/globals.css` & `src/components/StatementSection.tsx`):**
  - **CSS Line-Height Override:** Menghapus aturan `line-height: inherit;` pada selector `#nomina-home h1..h6` di `globals.css` dan membungkusnya dengan `:where(#nomina-home)` untuk menetralkan spesifisitas CSS. Sebelumnya, `line-height: inherit;` dengan ID selector menimpa utility class Tailwind `leading-[0.92]`, sehingga `<h2>` mewarisi line-height `1.5` dari body. Pada font display besar Bebas Neue (`8rem` / 128px), hal ini menciptakan ruang kosong vertikal raksasa sebesar ~95px di antara baris `"WE DESIGN"`, `"COMMUNICATION"`, dan `"ECOSYSTEMS."`.
  - **Inline Tight Line-Height & Proportional Margins:** Menambahkan `lineHeight: 0.88` secara eksplisit pada atribut `style` judul `<h2>` di [StatementSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/StatementSection.tsx) untuk memastikan kerapatan baris teks Bebas Neue yang solid dan konsisten, serta menyematkan margin proporsional (`mb-8 md:mb-10` pada `<h2>`, `mb-4` pada `<h3>`, dan `mb-8` pada `<p>`).
- **About Section Paragraph Centering (`src/app/globals.css` & `src/components/AboutSection.tsx`):**
  - **CSS Override Root Cause:** Menghapus aturan `margin: 0 !important;` pada selector `#nomina-home p` dan `#nomina-home h1..h6` di `globals.css` yang sebelumnya menimpa dan mematikan utility class Tailwind `mx-auto` (`margin-left: auto; margin-right: auto;`). Akibat aturan tersebut, elemen `<p max-w-2xl>` tertahan di sisi kiri (`margin-left: 0`) dari parent container `max-w-4xl` (~896px), sehingga teks bergeser ~100px ke kiri relatif terhadap judul dan tombol.
  - **Flexbox Centering:** Menambahkan `flex flex-col items-center` pada container [AboutSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/AboutSection.tsx) serta spacing margin yang proporsional (`mb-6 md:mb-8` dan `mb-8`), menjamin paragraf dan elemen CTA selalu 100% presisi di tengah secara struktural maupun visual.
- **Navbar Centering & Video Vignette Removal:**
  - **Navbar Centering (`src/components/Navbar.tsx`):** Memperbaiki posisi menu navigasi desktop (`ABOUT`, `ARCHIVE`, `SERVICES`, `CLIENTS`, `CAREERS`, `CONTACT`, `PORTOFOLIO`) menjadi presisi di tengah layar secara horizontal menggunakan `absolute left-1/2 -translate-x-1/2 h-full z-10`, menghilangkan pergeseran asimetris ke kanan yang sebelumnya disebabkan oleh lebar elemen logo di sisi kiri tanpa elemen penyeimbang di sisi kanan.
  - **Video Vignette Removal (`src/components/HeroSection.tsx`):** Menghapus layer overlay scrim gradient vignette (`bg-gradient-to-b from-black/50 via-transparent to-black/60`) dan mengembalikan `opacity` video hero menjadi 100% natural tanpa penggelapan.

### [Added]
- **Integrasi Komponen Shared Element Gallery (`src/components/ui/shared-element-gallery.tsx` & `src/components/portfolio/Skiper30.tsx`):**
  - **Primitive Component (`src/components/ui/shared-element-gallery.tsx`):** Mengimplementasikan komponen `Gallery`, `GalleryGrid`, dan `GalleryImage` berbasis React 19, Framer Motion, dan Tailwind CSS dengan animasi spring physics dan shared-element morphing (`layoutId`), backdrop blur, drag-to-dismiss secara vertikal, ESC listener, dan scroll lock otomatis.
  - **Skeleton Loading & Gray Frame Placeholder (`src/components/ui/shared-element-gallery.tsx`):** Menambahkan status loading dan gray frame placeholder (`bg-neutral-200 dark:bg-neutral-800` dengan `min-h-[260px] md:min-h-[320px]`) lengkap dengan efek animasi shimmer halus. Gambar disembunyikan sepenuhnya (`opacity-0`) selama proses unduhan dan baru melakukan transisi fade-in halus (`duration-300`) setelah event `onLoad` selesai, mencegah visual flicker atau layout shift.
  - **Standalone Demo (`src/components/ui/demo.tsx`):** Menyediakan komponen demo standalone dengan 12 curated spaces photography.
  - **Integrasi Gallery & Restorasi Hero Section (`src/components/portfolio/Skiper30.tsx`):** Menjaga dan merestorasi utuh Hero Spacer section bawaan halaman (`portOfolio` display title dengan background image, scroll down indicator, dan semantic SEO H1), lalu menyambungkannya dengan clean responsive masonry grid (`Gallery`, `GalleryGrid`, `GalleryImage`) berfitur shared-element morphing dan drag-to-dismiss.
  - **Full-Bleed Desktop Layout Enhancement (`src/components/portfolio/Skiper30.tsx`):** Menghapus batasan kontainer sempit `max-w-7xl` (~1280px) yang menyisakan banyak ruang kosong di layar desktop lebar; memperluas kontainer menjadi fluid full-bleed (`max-w-[2160px]`) dengan padding tepi proporsional (`px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16`) dan gap masonry dinamis (`gap-4 md:gap-6 xl:gap-8`), sehingga ukuran foto menjadi 40%-65% lebih besar, memenuhi layar secara sinematik, dan mengeliminasi area kosong di sisi kiri-kanan.
  - **Interactive Cursor Orange Circle Tooltip & Typography Fix (`src/components/portfolio/Skiper30.tsx` & `Skiper30.module.css`):** 
    - Menambahkan lingkaran oranye mengambang (`cursorCircle`) dengan physics spring halus yang mengikuti kursor saat mouse meng-hover foto di galeri dan menampilkan nama event.
    - **Perbaikan Tipografi & Text Overflow:** Menghapus aturan `word-wrap: break-word` yang memotong kata di tengah huruf (`CELEBRATIO-N`, `SUMMERGLO-W`, `#LEBIHDARIIT-U`); memperbesar diameter lingkaran dari 120px ke 140px; mengaktifkan `text-wrap: balance`, `word-break: normal`, `hyphens: none`, dan kalkulasi `fontSize` + `lineHeight` adaptif berbasis panjang karakter judul, sehingga seluruh kata tetap utuh dan tersusun proporsional di dalam lingkaran tanpa tumpah atau terpotong aneh.
    - Ketika foto diklik, lingkaran oranye langsung otomatis meredup dan mengecil (`scale: 0, opacity: 0`) seketika sehingga pengguna dapat berinteraksi murni dan fokus penuh pada modal zoom fullscreen tanpa gangguan visual.
  - **Penataan Ritmik & Estetika Posisi Portrait & Landscape (`src/components/portfolio/Skiper30.tsx`):**
    - Menyusun ulang 22 foto event (13 Portrait + 9 Landscape) menjadi komposisi ritmik berselang-seling (*alternating weave*) di seluruh 4 kolom masonry grid.
    - Menghilangkan penumpukan foto sejenis yang tidak estetik (seperti 4 foto landscape berturut-turut pada satu kolom).
    - Baris teratas (*header row*) diatur bergantian secara dinamis (`Portrait -> Landscape -> Portrait -> Portrait/Landscape`), dan setiap kolom tersusun ritmik (`P -> L -> P -> L -> P`, `L -> P -> L -> P -> L -> P`, `P -> L -> P -> L -> P -> L`, dan `P -> L -> P -> Square -> P`).
    - Akumulasi tinggi antar-kolom dihitung seimbang (~6.0 unit per kolom) dengan margin toleransi minimal, sehingga bagian bawah (*bottom baseline*) rata tanpa celah kosong (*empty spaces*), baik pada desktop 4 kolom, tablet 2 kolom, maupun mobile 1 kolom.
  - **Elevasi Footer & Cropping Celah Kosong Bawah Galeri (`Skiper30.tsx` & `PortfolioShowcaseMain.tsx`):**
    - Mengurangi bottom padding galeri dari `pb-28` (112px) menjadi `pb-4 md:pb-6` (16px-24px).
    - Menerapkan negative margin responsif dan stacking z-index pada `CreativeAgencyFooter` (`relative z-10 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20`) di [PortfolioShowcaseMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/portfolios/portfolio-showcase/PortfolioShowcaseMain.tsx), sehingga posisi footer naik dan langsung meng-crop celah kosong (*empty spaces*) di bawah foto secara seamless.
- **Revisi Landing Page & Inner Pages Nomina (MoM 24 Sep 2026 — Misi 1, 2, 4, 5, 6, 7)**:
  - **Misi 1 (Services):** Menghapus layanan `"STRATEGY . BRANDING"` di `src/components/ServicesSection.tsx` dan `src/components/text-slider/HomeMainTextSlider.tsx`, serta mengurutkan ulang layanan menjadi persis: `1. Event Organiser`, `2. Technical Custom Production`, `3. Rental Equipment`, `4. Web Development`, `5. SaaS Management`.
  - **Misi 2 (Careers):** Menghapus posisi & rute `Account Executive` (`src/app/(agntix)/career-account-executive` dan `AccountExecutiveMain.tsx`), mengganti `3D Designer` menjadi `3D Visualisation` dengan rute baru `/career-3d-visualisation` (serta redirect permanen dari `/career-3d-designer` di `next.config.ts`), memperbarui daftar posisi di `CareerOpening.tsx`, `ApplicationForm.tsx`, `job-application/page.tsx`, `Footer.tsx`, dan `CreativeAgencyFooter.tsx`, mengganti nominal gaji yang belum final pada sidebar detail karir (`Career3dDesignerMain.tsx` & `CareerDetailsDynamic.tsx`) menjadi `Competitive & Negotiable` (`Based on Experience & Portfolio`), serta memvalidasi allowlist `job_id` di `ApplicationForm.tsx` dan `submit-application.ts` agar query parameter posisi lama/tidak dikenal (`?jobId=account-executive`) otomatis fallback ke `general`.
  - **Misi 4 (Job Summary Highlight):** Menampilkan `Job Summary` sebagai callout highlight utama di `src/components/career/CareerDetailsDynamic.tsx`, `_career.scss`, dan `_dark.scss` dengan border kiri aksen brand `#FF3800`, background gradient halus, tipografi heading-level (`clamp(22px, 2.4vw, 28px)`), serta menjaga `overflow: hidden` pada `AboutUsBanner.tsx` untuk mencegah overlap parallax `ScrollSmoother`.
  - **Misi 5 (Tipografi, Struktur Heading Semantik & Micro-Interactions):** Mengaudit dan memperbaiki hierarki heading (`H1 -> H2 -> H3` tanpa lompatan level) di seluruh halaman non-landing (`/about`, `/portfolio`, `/career`, `/career-3d-visualisation`, `/job-application`, `/contact`) dan komponen footer bersama (`CreativeAgencyFooter.tsx`, `CreativeAgencyCopyright.tsx`), menjaga kompatibilitas selector SCSS (`_about.scss`, `_career.scss`, `_dark.scss`, `_contact.scss`), serta menambahkan `data-on-scroll="0"` pada `<h1 class="... tp_fade_anim">` di `CareerLightHero.tsx`, `ContactLightHero.tsx`, `JobApplicationHero.tsx`, dan `Skiper30.tsx`, `clearProps` pada `fadeAnimation` di `useGsapAnimation.ts`, dan micro-interaction scroll/hover bebas konflik GSAP (`animationConfig.ts`, `LightPageHero.module.css`, `Skiper30.module.css`).
  - **Misi 6 (Local SEO Jakarta):** Mengoptimalkan `<title>`, `meta description`, `openGraph`, `twitter`, dan H1 homepage untuk keyword lokal (`EO Jakarta`, `EO terdekat`, `jasa event organizer Jakarta`, `Event Organiser`, `Technical Custom Production`, `Rental Equipment`), memperkaya JSON-LD schema `LocalBusiness` / `ProfessionalService` / `EventVenue` + `OfferCatalog` (`Service`) dengan alamat lengkap Jakarta Selatan & koordinat geo, serta menambahkan `alt` text deskriptif pada gambar di homepage dan inner pages (`TeamMobileCoverflow.tsx`, `Skiper30.tsx`, `ClientsSection.tsx`, dll.).
  - **Misi 7 (Interactive Map):** Mengintegrasikan peta interaktif berbasis `react-leaflet` + `leaflet` (`src/components/contacts/NominaMapInner.tsx` & `NominaInteractiveMap.tsx`) di halaman Contact dengan tile OpenStreetMap tanpa watermark API key (`https://tile.openstreetmap.org/{z}/{x}/{y}.png`) dan filter CSS monokrom khusus `.nomina-leaflet-map .leaflet-tile-pane` (`grayscale(100%) contrast(1.05) brightness(1.03)`), pin marker `#FF3800` beranimasi ripple (`nomina-pin-ripple`), info window popup dengan tombol `"Get Directions"`, serta animasi smooth pan & zoom (`flyTo` dari overview Jakarta Selatan ke studio Duren Tiga) saat masuk viewport dengan listener `moveend` dan dukungan `prefers-reduced-motion`.
- **Production Readiness Blocker Remediation & Hardening (/boost)**:
  - Fixed ESLint error (`react/no-unescaped-entities`) in `src/components/about/ContactUsAbout.tsx` using `&apos;`, restoring clean `npm run lint` execution with 0 errors.
  - Configured comprehensive HTTP security headers and disabled `poweredByHeader` in `next.config.ts` (`Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and non-breaking `Content-Security-Policy-Report-Only`).
  - Created zero-dependency in-memory sliding window rate limiter in `src/lib/rate-limit.ts` (max 5 requests per IP per 10 minutes with throttled background pruning).
  - Hardened CV upload in `src/lib/cv-validation.ts` and `src/actions/submit-application.ts`: strictly paired extension, MIME type, and magic bytes per format (`%PDF` for `.pdf`, `PK\x03\x04` for `.docx`, `\xD0\xCF\x11\xE0` for `.doc`), fixed dotless filename extension bypass, and enforced 5MB size limit.
  - Hardened `src/actions/submit-contact.ts` and `src/actions/submit-application.ts` with IP rate limiting, input string length boundaries, safe client IP extraction fallbacks, and user-facing error messages.
  - Resolved UI form validation blind spots in `ApplicationForm.tsx` and `ContactUsForm.tsx` (added error indicators for `portfolio`, `salary`, `website` and aligned CV size label to 5MB).
  - Implemented PocketBase superuser auth token caching, single-flight auth promise deduplication, and 10s request timeouts in `src/lib/pocketbase.ts`.
  - Created native `src/app/healthz/route.ts` route handler returning `{ status: 'ok', uptime, timestamp }` and updated `docker-compose.yml` healthcheck probes from `/` to `/healthz`.
  - Upgraded verification test suite in `scripts/verify-boost.mjs` to execute real validation functions against active attack scenarios (ZIP masquerading, binary payloads, script injection, dotless filenames).
- **Production Readiness Audit (Universal Baseline)**:
  - Executed full 6-pillar production readiness audit covering Secrets/Env, Network/TLS/HTTP Headers, Input Security/Upload Handling, Database Resilience, Infrastructure/Rate Limiting/Observability, and Code Quality.
  - Generated comprehensive audit report (`production_readiness_audit.md`) with 68/100 readiness score and identified 4 Critical Blockers:
    1. Absence of HTTP Security Headers & enabled `poweredByHeader` in `next.config.ts`.
    2. Lack of MIME type/extension/magic bytes validation & size boundary for CV file upload in `submit-application.ts`.
    3. Missing Rate Limiting on public Server Actions (`submitApplication`, `submitContact`).
    4. ESLint failure in `src/components/about/ContactUsAbout.tsx` due to unescaped entities breaking `npm run check`.
- **Comprehensive SEO Remediation** across all 9 route segments:
  - `src/app/layout.tsx`: Added `metadataBase`, `title.template` (`%s | NOMINA Communication`), `keywords`, `authors`, `creator`, `publisher`, explicit `robots` + `googleBot` directives (index, follow, max-image-preview: large, max-snippet: -1, max-video-preview: -1), `alternates.canonical`, `openGraph` (type, locale, url, siteName, title, description, images), and `twitter` card metadata.
  - `src/app/page.tsx`: Added `openGraph`, `twitter`, `alternates.canonical`, and JSON-LD `Organization` structured data schema (`@context: https://schema.org`, `@type: Organization`, name, alternateName, url, logo, foundingDate, address, contactPoint).
  - All 7 inner pages (`/about`, `/career`, `/career-3d-designer`, `/career-account-executive`, `/contact`, `/portfolio`, `/job-application`) now have full `openGraph`, `twitter`, and `alternates.canonical` unique per route.
  - `generateMetadata` in `/job-application/page.tsx` extended: all 3 variants (default, 3d-designer, account-executive) now include full OG, Twitter, and canonical metadata.

- Added Next.js Server Action `src/actions/submit-contact.ts` to process contact form submissions and persist to PocketBase `contact_submissions` collection.
- Added `contact_submissions` collection definition to `scripts/setup-pocketbase.mjs`.
- Created `.env.example` template containing required PocketBase configuration variables.

- Refactored `ApplicationForm.tsx` and `ContactUsForm.tsx` to utilize React 19's native `useActionState` hook, removing boilerplate state handlers and manual `FormData` extraction.
- Enhanced CV upload UI in `ApplicationForm.tsx` with a custom styled upload button, interactive hover animations, and a file preview badge displaying the filename and size.

### [Fixed]
- Eliminated hardcoded fallback credentials in `src/lib/pocketbase.ts` and `scripts/setup-pocketbase.mjs`, enforcing strict environment variable validation and fail-closed security (CWE-798).
- Masked raw database/admin error messages in `src/actions/submit-application.ts` and `src/actions/submit-contact.ts` to prevent internal information disclosure (CWE-209).
- Next.js root metadata files:
  - Created `src/app/robots.ts` to allow all crawlers and reference dynamic `sitemap.xml`.
  - Created `src/app/sitemap.ts` to dynamically scan `src/app` route tree and generate valid `sitemap.xml` with live routes and modification dates.
  - Created `public/llms.txt` following the llms.txt standard for AI crawlers and LLM indexing.
- Unique SEO Titles & Meta Descriptions across all routes:
  - Added unique title and meta description to `src/app/page.tsx` (`/`).
  - Added unique metadata to `src/app/(agntix)/about/page.tsx` (`/about`).
  - Added unique metadata to `src/app/(agntix)/career/page.tsx` (`/career`).
  - Added unique metadata to `src/app/(agntix)/career-3d-designer/page.tsx` (`/career-3d-designer`).
  - Added unique metadata to `src/app/(agntix)/career-account-executive/page.tsx` (`/career-account-executive`).
  - Added unique metadata to `src/app/(agntix)/contact/page.tsx` (`/contact`).
  - Added unique metadata to `src/app/(agntix)/portfolio/page.tsx` (`/portfolio`).
  - Added dynamic `generateMetadata({ searchParams })` to `src/app/(agntix)/job-application/page.tsx` to generate distinct titles & descriptions for `/job-application`, `/job-application?jobId=3d-designer`, and `/job-application?jobId=account-executive`.
  - Created automated setup script `scripts/setup-pocketbase.mjs` to configure `job_applications` collection on PocketBase.
  - Added Next.js Server Action `src/actions/submit-application.ts` for secure server-side form submission with CV file uploads.
  - Implemented dynamic job categorization linking career openings (`/career-account-executive`, `/career-3d-designer`) to `/job-application?jobId=...`.
  - Refactored `ApplicationForm.tsx` with position dropdown, client validation, file selection feedback, and loading/success states.
  - Added PocketBase helper `src/lib/pocketbase.ts`.
- Implemented `TeamMobileCoverflow` component featuring a Smooth 3D Coverflow carousel tailored for mobile viewports with touch swipe gestures, pagination indicators, and clear member name & role typography overlays.
- Integrated responsive layout switcher in `TeamSection` maintaining the original 2-column grid and GSAP cursor hover preview on desktop while rendering the 3D Coverflow on mobile screens (< 769px).
- Refined `TeamMobileCoverflow` card dimensions to 16:10 landscape aspect ratio (`280px` x `175px`) to preserve natural image proportions and prevent photo cropping on mobile devices.
- Added top clearance padding (`paddingTop: 28px`, `height: cardHeight + 120`) and enhanced section spacing to prevent 3D perspective cards and badge corners from being clipped by container overflow.
- Integrated AI Context System (`llms.txt`, `BRAIN.md`, `CHANGELOG.md`, `AGENTS.md`) for persistent cross-session memory and context synchronization.
- Created `llms.txt` navigation map for LLMs and agent tooling.
- Created `BRAIN.md` as dynamic persistent memory tracking current context, active brainstorming, and architectural decisions.

### [Changed]
- Migrated Hero section background video from local 36MB static asset (`/videos/special20-showreel-1080.mp4`) to Cloudinary CDN URL (`https://res.cloudinary.com/v764bbhk/video/upload/v1787297781/special20-showreel-1080.mp4`) for fast edge streaming, lower bandwidth consumption, and enhanced initial load performance.

### [Fixed]
- Resolved SEO crawlability issues (broken links and thin internal linking):
  - Replaced Next.js `<Link>` with standard `<a>` tags for `mailto:` and `tel:` links in `CreativeAgencyFooter.tsx` to prevent Cloudflare email obfuscation 404s.
  - Fixed broken `contact-us-light` link in `CreativeAboutTwo.tsx` to point to `/contact`.
  - Added "Open Roles" section under Quick Links in `Footer.tsx` and `CreativeAgencyFooter.tsx` to improve internal linking for specific job details pages (`/career-3d-designer` and `/career-account-executive`).
- Resolved SEO Content Warnings (Missing H1 & Duplicate Content):
  - Added visually hidden H1 (`Nomina Creative Asia`) to Homepage (`HeroSection.tsx`).
  - Converted existing visual headings from H3/H4 to H1 in `CreativeAbout.tsx` and `CareerDetailsDynamic.tsx` to establish proper semantic hierarchy without altering CSS rendering.
  - Added a dynamic visually hidden paragraph in `ApplicationForm.tsx` to distinguish duplicate content across `/job-application` variants based on the `jobId` parameter.
- Resolved ESLint `react-hooks/set-state-in-effect` warning in `TeamMobileCoverflow.tsx` by deriving the clamped active slide index directly during render.
- Added defensive DOM existence checks for `.tp-gsap-bg`, `.tp-bounce`, and `.tp-brand-inner-item img` in `src/hooks/useGsapAnimation.ts` to eliminate browser console warnings (`GSAP target not found` / `Element not found`) on `/contact` and other routes.
- Added responsive `sizes` prop (`(max-width: 768px) 250px, (max-width: 1366px) 305px, (max-width: 1440px) 324px, 432px`) to `<Image fill>` in `Skiper30.tsx` portfolio gallery to eliminate Next.js missing sizes warnings and prevent downloading oversized full-viewport images.
- Updated CTA link in `AboutSection` ("NOMINA: More, than just") to point directly to `/about`.
- Updated CTA link in `ClientsSection` ("We Have Collaborated With") to point directly to `/portfolio`.
- Standardized uppercase naming convention for `BRAIN.md` and updated import pointers across `AGENTS.md` and agent rule files (`.clinerules`, `.continue/rules/project.md`, `.amazonq/rules/project.md`, `.github/copilot-instructions.md`).

### [Removed]
- Removed `EN` / `ID` language switcher from `HeroSection`, `Navbar`, and `StaggeredMenu`.
- Removed circular floating `N` badge widget from the bottom left corner of `HeroSection`.

## [0.3.1] - 2026-03-29

### Fixed
- `sync-agent-rules.sh` failing to resolve `@file` imports on Windows due to CRLF line endings — platform instruction files now correctly inline the Inspection Guide content

## [0.3.0] - 2026-03-29

### Added
- Multi-URL support for `/clone-website` — clone multiple sites in a single command with parallel processing and isolated output
- CI quality gates via GitHub Actions — automated lint, typecheck, and build on every push and PR
- `npm run typecheck` and `npm run check` scripts for local quality validation
- `.gitattributes` for cross-platform line ending normalization
- `.nvmrc` to pin Node.js 20 for contributor consistency

### Changed
- Streamlined PR template — removed redundant checklist items and screenshots section
- Improved project description and README — clearer use cases, limitations, and modern wording
- Refined documentation and agent rules across all platforms for clarity and consistency
- Fixed CRLF handling in `sync-skills.mjs` for reliable Windows operation

### Removed
- Outdated use case from README documentation

## [0.2.0] - 2026-03-28

### Added
- Multi-platform AI agent support: Claude Code, Codex CLI, OpenCode, GitHub Copilot, Cursor, Windsurf, Gemini CLI, Cline/Roo Code, Continue, Amazon Q, Augment Code, Aider
- Platform-specific instruction files and `/clone-website` skill for each supported agent
- `scripts/sync-agent-rules.sh` to regenerate platform instruction files from AGENTS.md
- `scripts/sync-skills.mjs` to regenerate `/clone-website` skill across all platforms
- GEMINI.md for Gemini CLI configuration
- Supported Platforms table in README
- "Updating for Other Platforms" documentation section in README

### Changed
- README now describes the project as multi-agent (Claude Code recommended, not required)
- AGENTS.md updated with sync script reminders

## [0.1.1] - 2026-03-28

### Added
- Bug report and feature request issue templates
- Pull request template with checklist
- CHANGELOG.md following Keep a Changelog format
- Package.json metadata (description, repository, homepage, keywords, engines)

### Fixed
- LICENSE copyright holder now attributed to JCodesMore

## [0.1.0] - 2026-03-28

### Added
- Initial template scaffold for website reverse-engineering with Claude Code
- `/clone-website` skill for full-site cloning pipeline
- `/build-from-spec` and `/customize` skills
- Parallel builder agents with git worktree isolation
- Chrome MCP integration for design token extraction
- Comprehensive inspection guide and project structure documentation
- Next.js 16 + shadcn/ui + Tailwind CSS v4 base scaffold
- MIT license
- README with badges, demo section, quick start, and star history

[Unreleased]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.3.1...HEAD
[0.3.1]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/JCodesMore/ai-website-cloner-template/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/JCodesMore/ai-website-cloner-template/releases/tag/v0.1.0
