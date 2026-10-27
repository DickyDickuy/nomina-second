# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### [Fixed]
- **Exclusion of Page Transition for Same-Page & In-Page Anchor Navigation ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx), [Navbar.tsx](file:///Users/dicky/Work/nomina-second/src/components/Navbar.tsx), [StaggeredMenu.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/StaggeredMenu/StaggeredMenu.tsx), [Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx)):**
  - Guaranteed that page transitions **ONLY** trigger when navigating to a different page route (`targetPath !== currentPath`).
  - Anchor section links on the landing page (`#about`, `#services`, `#clients`, `#special-20`), clicks on the current page's logo, footer links pointing to the current page, and browser back/forward history between in-page anchor fragments are now 100% excluded from the transition—they smooth-scroll directly to the target element without triggering any overlay animation.
  - Added strict `currentPath !== lastPath` pathname checks on `popstate` and `usePathname()` so hash changes on the same page never fire `playSweepTransition()`.

### [Changed]
- **Page Transition Timing & Stagger Calibration ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx)):**
  - Slowed down the 3-layer page transition and increased stagger from `0.065s` to `0.18s` (duration `0.72s`, ease `power3.out` / `power3.inOut`) with a `0.08s - 0.1s` hold on the top Nomina Orange layer.
  - Each distinct color band (#000000 Black → #333333 Dark Gray → #fb5102 Orange) is now clearly and visibly distinguished as it sweeps across the screen and peels away to reveal the destination page.
- **Brand Orange Token Migration to Bright Orange `#fb5102` ([globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css), [agntix-globals.scss](file:///Users/dicky/Work/nomina-second/src/app/(agntix)/agntix-globals.scss), [_colors.scss](file:///Users/dicky/Work/nomina-second/public/assets/scss/utils/_colors.scss), [Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx), [Navbar.tsx](file:///Users/dicky/Work/nomina-second/src/components/Navbar.tsx), [AboutSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/AboutSection.tsx), [PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx), [StaggeredMenu.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/StaggeredMenu/StaggeredMenu.tsx), [CareerBenifit.tsx](file:///Users/dicky/Work/nomina-second/src/components/benefits/CareerBenifit.tsx)):**
  - Updated all brand orange instances across the codebase (`--color-nomina-orange`, `--color-nomina-red`, `--primary`, `--ring`, `--sidebar-primary`, `--tp-common-red`, `--tp-common-red-3`, footer bullets/links/wordmark, navbar hover states, service row hover, about text highlight, and the 3-layer page transition curtain) from `#e85002` to `#fb5102`.

### [Added]
- **Support Transisi Antar-Halaman untuk Tombol Browser Back & Forward ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx), [layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx)):**
  - Menambahkan listener `popstate`, deteksi perubahan `pathname` dari history, `pageshow` (bfcache restore), dan sinkronisasi `performance.getEntriesByType("navigation")[0].type === "back_forward"`.
  - Ketika user menekan tombol Back (`<`) atau Forward (`>`) di browser maupun swipe gesture di mobile/trackpad, sistem otomatis memainkan transisi 3-layer (#000000 Black → #333333 Dark Gray → #fb5102 Orange) naik menutupi layar dan berbalik membuka ke bawah untuk menampilkan halaman sebelumnya.
- **Staggered 3-Color Page Transition Overlay ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx), [layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx), [Navbar.tsx](file:///Users/dicky/Work/nomina-second/src/components/Navbar.tsx), [StaggeredMenu.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/StaggeredMenu/StaggeredMenu.tsx), [Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx)):**
  - Built a lightweight, hardware-accelerated 3-layer page transition component (`#000000` Black → `#333333` Dark Gray → `#fb5102` Nomina Orange from the Slide 2 palette) modeled after `StaggeredMenu.tsx`.
  - When the user navigates to another page (via Navbar, StaggeredMenu, Footer, or any internal `<a>` / `<Link>`), the 3 layers sweep from **bottom to top** (`yPercent: 100 -> 0`, `power4.out`, `0.065s` stagger), ending on solid `#fb5102` Orange.
  - Added a synchronous pre-paint script and `html[data-pt-covered="true"]` style in [layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx) so the `#fb5102` Orange overlay stays locked at `translate3d(0, 0%, 0)` with zero flash while the destination page loads and renders behind it, then plays the exact **reverse animation** (`#fb5102` → `#333333` → `#000000` sliding back down `yPercent: 0 -> 100`, `power4.inOut`) to reveal the rendered page.
  - Uses pure GPU-composited `transform: translate3d` (`force3D: true`, `will-change: transform`, `backface-visibility: hidden`, zero blur/filters) and `pageshow` bfcache cleanup so iOS and Android run it at 60/120fps without lag.

### [Fixed]
- **Footer Unification, Sub-pixel Seam Elimination, CSS Layer Reset Immunity & Full-Display Wordmark ([Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx), [CreativeAgencyFooter.tsx](file:///Users/dicky/Work/nomina-second/src/layouts/footers/CreativeAgencyFooter.tsx), [useScrollSmooth.ts](file:///Users/dicky/Work/nomina-second/src/hooks/useScrollSmooth.ts), [AnimationWrapper.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/Animation/AnimationWrapper.tsx), [globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css)):**
  - **Unified Footer across `/` and `(agntix)` inner pages:** Replaced the separate Bootstrap/Agntix markup in [CreativeAgencyFooter.tsx](file:///Users/dicky/Work/nomina-second/src/layouts/footers/CreativeAgencyFooter.tsx) (`tp-footer-area` + `tp-copyright-area`) with the single unified [Footer](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx) component (`zIndex: 2`). This eliminates the 1px horizontal seam line above `NOMINA` during `ScrollSmoother` sub-pixel scrolling on `/about`, prevents `.tp-vertical-lines-overlay` from drawing over the footer, and makes the `#E85002` orange bullets, typography, and 3-column layout 100% identical across all pages.
  - **Fixed Footer Cut-Off on Inner Pages vs. Oversized Padding on Landing Page:** Resolved CSS Cascade Layer collision where Agntix's unlayered `* { margin: 0; padding: 0; }` in `public/assets/scss/theme/_common.scss` overrode Tailwind v4 `@layer utilities` padding classes (`px-[60px]`, `pt-[160px]`, `md:pl-[150px]`) to `0px` on `/about` and `/career` (causing top/left text clipping), while `/` rendered an overly tall `160px` top gap. Replaced Tailwind padding utilities on [Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx) with unlayered scoped CSS rules (`padding: 84px 60px 32px 60px !important` on desktop, `56px 24px 32px 24px !important` on mobile).
  - **Full-Display Giant Orange `NOMINA` Wordmark:** Scaled the `NOMINA` wordmark to `fontSize: "22.5vw"` (`letterSpacing: "-0.02em"`, `lineHeight: 0.75`, `padding: "14px 0 0 0"`, flex-centered with zero horizontal padding) so `NOMINA` fills ~97% of the display width edge-to-edge without the right `A` getting pushed off-screen.
  - **GSAP `ScrollSmoother` & `AnimationWrapper` Route Lifecycle:** Added `[pathname]` dependency, `ResizeObserver` on `#smooth-content`, and `revertOnUpdate: true` cleanup in [useScrollSmooth.ts](file:///Users/dicky/Work/nomina-second/src/hooks/useScrollSmooth.ts) (`ScrollSmoother.get()?.kill()`, `window.scrollTo(0, 0)`, and body style cleanup) and wrapped async font-ready animations with `contextSafe` in [AnimationWrapper.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/Animation/AnimationWrapper.tsx) so `ScrollTrigger` and `SplitText` instances clean up properly across page transitions.
- **Speed Calibration on Clients Marquee & Career Coverflow:**
  - **Clients Marquee ([ClientsSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/ClientsSection.tsx) & [globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css)):** Fixed sudden velocity doubling caused by inserting 29 logos (longer row width in the same 40s duration). Calibrated animation duration to `90s` so the marquee scrolls smoothly and at a calm brand pace.
  - **Career Coverflow ([CareerOpening.tsx](file:///Users/dicky/Work/nomina-second/src/components/career/CareerOpening.tsx)):** Removed unwanted `autoplay` (2s interval) from `Skiper49` to adhere 1:1 to reference source code, preventing aggressive auto-swiping.

### [Added]
- **Brands We’ve Grown With 29 Transparent Client Logos Refresh ([ClientsSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/ClientsSection.tsx)):**
  - Migrated and optimized 29 background-free client logos from `/Users/dicky/Downloads/Logo Client Nomina/` into dedicated directory `public/images/clients/` (reduced total size to 3.0MB with high-DPI Lanczos downsampling).
  - Autocropped transparent bounding box padding across all logos, fixing the microscopic rendering issue on `grand-indonesia.png` (which previously had 550px+ of transparent vertical padding) and `chemours.png`.
  - Updated [ClientsSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/ClientsSection.tsx) to render the 29 new client logos across 5 dynamic marquee rows with verified official client URLs.
  - Finalized client link mapping per user review: JD.ID (`https://www.instagram.com/jdid/`), Hitachi (`https://www.hitachi.com`), and Yoshimoto (`https://yoshimoto-international.com/`).
- **The Visionaries Unified Originkit 3D Coverflow with Pixelated & Greyscale Effect (Slide 11 — [Smooth3DSlideshow.tsx](file:///Users/dicky/Work/nomina-second/src/components/team/Smooth3DSlideshow.tsx), [TeamSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/team/TeamSection.tsx), [TeamSection.module.scss](file:///Users/dicky/Work/nomina-second/src/components/team/TeamSection.module.scss)):**
  - Unified desktop and mobile views of `The Visionaries` into a single responsive Originkit `Smooth3DSlideshow` 3D Coverflow Gallery component, removing the old split desktop 2-column hover list and mobile coverflow.
  - Added `<PixelatedSlideImage>` canvas overlay that renders non-centered cards (`!isActive`) in greyscale with crisp mosaic pixelation (`imageSmoothingEnabled = false`, `image-rendering: pixelated`), and smoothly resolves the pixel blocks while restoring full color when a card moves to the center (`isActive`).
  - Configured the member Name (`slide.title`) and Position (`slide.role`) overlay to appear exclusively on the centered card (`opacity: isActive ? 1 : 0`).
- **Audit Komprehensif Status 19 Slide Feedback:**
  - Membuat dokumen audit artifact lengkap `AUDIT_SLIDE_STATUS.md` yang memetakan status kepatuhan Slide 0 s/d 18 terhadap deck dan video referensi.
  - Mengidentifikasi status: 15 slide 100% sesuai, 2 slide disesuaikan atas instruksi eksplisit user (Slide 6 & Slide 9 - White Landing Page Theme), dan 1 slide tersisa yang belum sesuai (Slide 11 - The Visionaries Pixel Grid Reveal Effect).

### [Fixed]
- **Career Coverflow Shortest-Path Circular Loop Navigation ([CareerOpening.tsx](file:///Users/dicky/Work/nomina-second/src/components/career/CareerOpening.tsx)):**
  - Replaced naive `slideToLoop(targetIdx)` (which searched for the first slide in DOM order, causing it to rewind backwards 3 times when clicking from slide 4 to slide 1) with an intelligent shortest-path circular navigation handler (`handleDotClick`).
  - When on slide 4 (index 3) and clicking dot 1 (index 0), it now triggers `slideNext()` to slide smoothly **1 step forward to the right**.
  - When on slide 1 (index 0) and clicking dot 4 (index 3), it now triggers `slidePrev()` to slide smoothly **1 step backward to the left**.
  - For adjacent and opposite steps, it selects the nearest DOM clone slide to eliminate all awkward multi-slide rewind animations.
- **Career Coverflow Navigation Dots Fixed to Clear High-Contrast Circles ([CareerOpening.tsx](file:///Users/dicky/Work/nomina-second/src/components/career/CareerOpening.tsx)):**
  - Replaced native button styling that caused browser user-agent square bevel rendering (`■`) with explicit geometric circle `<span>` elements (`style={{ borderRadius: "50%" }}`).
  - Upgraded active dot to bold solid black with scale highlight (`bg-black scale-110 shadow-sm`) and inactive dots to clearly visible gray circles with border (`bg-[#d1d5db] border border-black/20 hover:bg-[#9ca3af]`), ensuring all 4 pagination circles are immediately visible and high-contrast against the white background.
- **Career Coverflow Shape Reset to Sharp Square ([CareerOpening.tsx](file:///Users/dicky/Work/nomina-second/src/components/career/CareerOpening.tsx)):**
  - Removed all `border-radius` from `.swiper-slide` so cards are pure square with sharp 90-degree corners (`300px × 300px`), restoring 100% adherence to the original Skiper49 source code and reference image.
- **Career Coverflow Hover Zoom Removed ([CareerOpening.tsx](file:///Users/dicky/Work/nomina-second/src/components/career/CareerOpening.tsx)):**
  - Removed all artificial hover zoom animations (`group-hover:scale-105` and `transition-transform duration-500`) from the carousel images, keeping them completely static and faithful to the source code reference.
- **Career Coverflow Exact 1:1 Skiper49 Reference Matching ([CareerOpening.tsx](file:///Users/dicky/Work/nomina-second/src/components/career/CareerOpening.tsx)):**
  - **Strictly 3 Cards Visible:** Replaced the wide 1200px container with the exact `max-w-4xl px-5` (896px) structure from Skiper49 and calibrated slide size to `300px × 330px` with `rotate: 40`, `depth: 100`, `stretch: 0`, and `slideShadows: true`. Exactly 3 cards are visible (center flat forward, 1 left angled 40°, 1 right angled 40°), with 4th and 5th cards completely hidden by overflow clipping.
  - **Removed Top Meta Badges & Cleaned Card Layout:** Stripped out artificial top badges (`Full-Time`, `01 Open Role`), leaving the artwork/photo dominant with a subtle bottom vignette gradient, clean title (`text-sm sm:text-base uppercase`), and compact "Apply Now" pill button.
  - **Minimalist 4-Dot Pagination:** Centered round bullet dots directly below the carousel matching the visual style of the reference.
- **Portfolio Hardware-Accelerated Circular Gallery Initial Render & Click Interaction ([CircularGallery.tsx](file:///Users/dicky/Work/nomina-second/src/components/portfolio/CircularGallery.tsx)):**
  - **Initial Left Card Visibility Bug:** Fixed empty left side on page load where user had to interact before left cards appeared. Implemented continuous modular wrapping formula (`((((rawX + halfTotal) % widthTotal) + widthTotal) % widthTotal) - halfTotal`) ensuring cards are populated symmetrically around center ($x=0$) on initial frame render with zero user interaction needed.
  - **Precision Card Click Detection:** Upgraded click handler in `onTouchUp` with WebGL world-space coordinate raycasting, accurately detecting and opening the clicked project card (center, left, or right) in the lightbox preview.
  - **Performance Optimization & Culling:** Reduced plane geometry segments from 32x64 down to 16x24 (85% reduction in triangle count) and added off-screen mesh visibility culling (`this.plane.visible = isVisible`), reducing active draw calls from 44 to 4-6 for locked 60fps performance on all devices.

### [Changed]
- **Page Transition Timing & Stagger Calibration ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx)):**
  - Slowed down the 3-layer page transition and increased stagger from `0.065s` to `0.18s` (duration `0.72s`, ease `power3.out` / `power3.inOut`) with a `0.08s - 0.1s` hold on the top Nomina Orange layer.
  - Each distinct color band (#000000 Black → #333333 Dark Gray → #fb5102 Orange) is now clearly and visibly distinguished as it sweeps across the screen and peels away to reveal the destination page.

### [Added]
- **Fase 3 & 4 Motion Architecture (Refined per User Feedback — Clean White Landing Page, OGL WebGL CircularGallery, & Skiper49 Carousel_003):**
  - **Intro / About Clean White Section with Sequential Text & Color Animation (Slide 6 — [AboutSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/AboutSection.tsx)):** Removed the dark isometric background and floating box; kept the landing page pure white (`bg-white`) and applied only the sequential line reveal and orange-to-black color transition animation from the Slide 6 video reference.
  - **Clients Clean White Marquee with Clickable Official Links (Slide 9 — [ClientsSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/ClientsSection.tsx)):** Removed the dark radial dial UI and restored the pure white (`bg-white`) 5-row dynamic marquee with `Brands We’ve Grown With` heading and clickable `<a target="_blank" rel="noopener noreferrer">` links for all 17 client logos.
  - **Portfolio / Archive Hardware-Accelerated OGL WebGL `CircularGallery` (Slide 10 — [CircularGallery.tsx](file:///Users/dicky/Work/nomina-second/src/components/portfolio/CircularGallery.tsx) & [Skiper30.tsx](file:///Users/dicky/Work/nomina-second/src/components/portfolio/Skiper30.tsx)):** Implemented the OGL WebGL `CircularGallery` (`bend={3}`, `borderRadius={0.05}`, `scrollEase={0.05}`) on a single `<canvas>` for butter-smooth 60fps performance across all 22 project cards, with click-to-preview lightbox support.
  - **Careers `Skiper49` / `Carousel_003` Swiper Coverflow (`CareerOpening.tsx` & `CareerMain.tsx`):** Removed `CareerBenifit` ("Our Culture & Benefits") from `/career` and replaced `CareerOpening.tsx` with the `Skiper49` / `Carousel_003` Swiper Coverflow component (`rotate: 40`, `depth: 100`, `slideShadows: true`) using real high-res NOMINA event photos plus the clean role table below.
  - **Statement Section Scroll Reveal (Slide 3 — [StatementSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/StatementSection.tsx)):** Added staggered line mask reveal and viewport-linked transitions.

### [Changed]
- **Page Transition Timing & Stagger Calibration ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx)):**
  - Slowed down the 3-layer page transition and increased stagger from `0.065s` to `0.18s` (duration `0.72s`, ease `power3.out` / `power3.inOut`) with a `0.08s - 0.1s` hold on the top Nomina Orange layer.
  - Each distinct color band (#000000 Black → #333333 Dark Gray → #fb5102 Orange) is now clearly and visibly distinguished as it sweeps across the screen and peels away to reveal the destination page.

### [Added]
- **Support Transisi Antar-Halaman untuk Tombol Browser Back & Forward ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx), [layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx)):**
  - Menambahkan listener `popstate`, deteksi perubahan `pathname` dari history, `pageshow` (bfcache restore), dan sinkronisasi `performance.getEntriesByType("navigation")[0].type === "back_forward"`.
  - Ketika user menekan tombol Back (`<`) atau Forward (`>`) di browser maupun swipe gesture di mobile/trackpad, sistem otomatis memainkan transisi 3-layer (#000000 Black → #333333 Dark Gray → #fb5102 Orange) naik menutupi layar dan berbalik membuka ke bawah untuk menampilkan halaman sebelumnya.

### [Changed]
- **Fase 2 Feedback Implementation (Slides 4, 5, 7, 9, 11, 12, 14-18):**
  - **Hero/Weather (Slide 4):** [WeatherWidget.tsx](file:///Users/dicky/Work/nomina-second/src/components/WeatherWidget.tsx) now shows `JAKARTA SELATAN` with a `MapPin` icon in white, precipitation/humidity/wind block removed; bottom-right `SPECIAL EDITION / 10 YEARS OF PEOPLE` tagline removed from [HeroSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/HeroSection.tsx).
  - **Services Interactive Accordion & Alignment Fix (`ServicesSection.tsx` & `globals.css`):**
    - Removed `margin: 0 !important;` from `#nomina-home p` and `#nomina-home h1..h6` in [globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css) (wrapped in `:where(#nomina-home)`), which previously overrode Tailwind `mx-auto` and forced centered paragraphs to stick to the left edge.
    - Upgraded [ServicesSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/ServicesSection.tsx) into an interactive spring-physics hover accordion (`Framer Motion` `layout` + `height: "auto"` reveal): hovering a service smoothly expands the row vertically, reveals its centered English copywriting (`text-nomina-white/95` on `#e85002` orange background), and dynamically repositions/scales neighboring service rows for an immersive layout transition.
  - **Copywriting:** About (Slide 5), Services descriptions now visible in English (Slide 7), Clients heading `Brands We’ve Grown With` (Slide 9), Team heading `The Visionaries` (Slide 11).
  - **Clients:** data restructured to `{ name, src, href? }`; logos render as `<a target="_blank" rel="noopener noreferrer">` when `href` is set via `CLIENT_HREFS` (awaiting user URL list).
  - **Landing typography:** Heading sizes recalibrated for Nasalization (wide font; previously sized for Bebas Neue) in Statement, About, Services, Clients; removed faux-bold on headings; body copy uses Aspekta 500.
  - **Route rename:** `/career-3d-visualisation` → `/career-3d-visualizer` (folder, links, forms, server action, metadata, llms.txt); `3D Visualisation` → `3D Visualizer` everywhere. Permanent redirects added in `next.config.ts` from `/career-3d-designer` and `/career-3d-visualisation`; legacy `job_id` values are normalized.
  - **Career details:** New copy for all 4 roles, `Job Summary` → `About the Role`, bold label prefix for responsibilities, sidebar `10 AM to 7 PM` and `5 Working Days per Week (Mon to Fri)`.
- **Fonts folder cleanup:** Removed unused `public/fonts` (static Aspekta ttf/otf/webfonts, Bebas Neue, duplicate variable files). Only `Nasalization-Regular.otf` and `AspektaVF.woff2` remain, in [src/fonts](file:///Users/dicky/Work/nomina-second/src/fonts), loaded solely via `next/font/local`; duplicate `@font-face` rules removed from `globals.css` and `_typography.scss`.

### [Changed]
- **Fase 1 Feedback Implementation — Brand Fonts (`Nasalization` & `Aspekta`) & Color Palette Tokens (Slide 1 & 2):**
  - Integrated local brand fonts `Nasalization Rg.otf` (`--font-nasalization` / `--font-heading`) and variable `AspektaVF.woff2` (`--font-aspekta` / `--font-body`, weights `100 900`) in [layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx), [globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css), and [_typography.scss](file:///Users/dicky/Work/nomina-second/public/assets/scss/utils/_typography.scss).
  - Updated brand color tokens and the 4-stop brand gradient (`linear-gradient(135deg, #000000 0%, #c10801 35%, #f16001 70%, #d9c3ab 100%)`) across [globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css), [agntix-globals.scss](file:///Users/dicky/Work/nomina-second/src/app/(agntix)/agntix-globals.scss), [_colors.scss](file:///Users/dicky/Work/nomina-second/public/assets/scss/utils/_colors.scss), [Navbar.tsx](file:///Users/dicky/Work/nomina-second/src/components/Navbar.tsx), and [Footer.tsx](file:///Users/dicky/Work/nomina-second/src/components/Footer.tsx):
    - `--color-nomina-orange`: `#e85002`, `--color-nomina-orange-bright`: `#fb5102`
    - `--color-nomina-black`: `#000000`, `--color-nomina-white`: `#f9f9f9`
    - `--color-nomina-gray`: `#646464`, `--color-nomina-light-gray`: `#a7a7a7`, `--color-nomina-dark-gray`: `#333333`
    - `--color-nomina-surface`: `#cdcdcb`, `--color-nomina-navy`: `#1c1e2a`

### [Changed]
- **Page Transition Timing & Stagger Calibration ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx)):**
  - Slowed down the 3-layer page transition and increased stagger from `0.065s` to `0.18s` (duration `0.72s`, ease `power3.out` / `power3.inOut`) with a `0.08s - 0.1s` hold on the top Nomina Orange layer.
  - Each distinct color band (#000000 Black → #333333 Dark Gray → #fb5102 Orange) is now clearly and visibly distinguished as it sweeps across the screen and peels away to reveal the destination page.

### [Added]
- **Career Detail Pages for Project Manager, Production Manager, Sales and Account Manager:**
  - New components [CareerProjectManagerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/CareerProjectManagerMain.tsx), [CareerProductionManagerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/CareerProductionManagerMain.tsx), and [CareerSalesAccountManagerMain.tsx](file:///Users/dicky/Work/nomina-second/src/pages/career-details/CareerSalesAccountManagerMain.tsx), mirroring `Career3dDesignerMain.tsx` with real English job copy and the dynamic `getTwoWeeksDeadline()` (+14 days) logic.
  - New routes `/career-project-manager`, `/career-production-manager`, `/career-sales-account-manager` with unique metadata (title, description, canonical, Open Graph, Twitter), auto-listed in the sitemap.
  - Registered the routes in `animationConfig.ts`, pointed Open Roles cards ([CareerOpening.tsx](file:///Users/dicky/Work/nomina-second/src/components/career/CareerOpening.tsx)) and both footers to the new pages, and added entries to `public/llms.txt`.
  - Application form and server action already accepted all three `job_id` values, so no change was needed there. The "Apply for the Job" button maps each title to the matching `jobId`.

### [Changed]
- **Mobile Hero (pilcommunication.com style), Burger Animation (`Navbar.tsx`, `HeroSection.tsx`, `StaggeredMenu.tsx`, `StaggeredMenu.module.scss`):**
  - On mobile the hero is a full-height white screen with the showreel as a 16:9 band centered vertically; logo and Menu sit on the white background in dark color, tagline is dark. Desktop keeps the full-screen video hero with white text.
  - Scroll threshold in the navbar is based on the real hero height, with a resize listener.
  - Replaced the plus icon with a 3-bar burger that morphs into an X (GSAP) when the menu opens.
  - Color sync moved to its own effect so scrolling while the menu is open no longer resets the panel animation state.
- **Job Application Form Field Copywriting (`src/components/forms/ApplicationForm.tsx` & `src/actions/submit-application.ts`):**
  - Updated the outdated and tech-specific portfolio input label `Share your portfolio link (Behance, Dribbble, GitHub, etc.)` to `LinkedIn Profile or Portfolio Link (LinkedIn, Instagram, Drive, etc.)`.
  - Updated placeholder to `https://linkedin.com/in/yourname or instagram.com/username` to fit Indonesian event organizer and creative agency talent standards (Sales, PM, Production, and 3D Visualisation).
- **Project Manager Page Metadata Title (`src/app/(agntix)/career-project-manager/page.tsx`):**
  - Updated page title and social metadata title to `"Hiring: Project Manager (Jakarta) | NOMINA Creative"`.
- **Statement Section Copywriting Typography & English Transition (`src/components/StatementSection.tsx` & `src/app/globals.css`):**
  - Converted the copywriting under `"WE DESIGN COMMUNICATION ECOSYSTEMS."` into fluent, native creative agency English (`"10 Years of Building Events and Brands in Jakarta"` and `"For 10 years, NOMINA Creative has been the event organizer of choice in Jakarta for hundreds of leading brands, from corporate events and brand activations to exhibitions and national-scale product launches. From sound system and event furniture rentals to technical custom production, we connect ideas, content, people, and technology to create memorable and impactful communication."`).
  - Removed all em dashes (`—`) across both visible copy and accessible labels.
  - Aligned typography to 100% match `AboutSection.tsx` (`var(--font-body)` News Cycle, `fontWeight: 700`, `fontSize: clamp(1rem, 2vw, 1.25rem)`, solid `#000000`, `leading-relaxed`).
  - Protected subheaders with `#nomina-home h3:not(.font-body)` in [globals.css](file:///Users/dicky/Work/nomina-second/src/app/globals.css) to prevent uppercase Bebas Neue font overrides.
- **LinkedIn Official URL Integration:** Mengganti tautan LinkedIn perusahaan yang sebelumnya 404 (`nomina-indonesia` dan tautan generik) menjadi URL profil LinkedIn resmi aktif: `https://www.linkedin.com/company/nominacreative/home/` di seluruh komponen Footer (`src/components/Footer.tsx`), `FooterSocialIcons.tsx`, structured data JSON-LD (`src/app/page.tsx`), dan menu navigasi sosial pada inner pages (`CareerMain.tsx`, `AboutCreativeMain.tsx`, `ContactUsMain.tsx`, `PortfolioShowcaseMain.tsx`).
- **Career 3D Visualisation Dynamic Deadline (`src/pages/career-details/Career3dDesignerMain.tsx`):** Mengganti tanggal deadline karir 3D Visualisation yang sebelumnya tertulis `31 Aug 2026` menjadi tepat 2 minggu dari hari ini (`26 Oct 2026`) menggunakan `useMemo` dinamis (+14 hari dari waktu akses saat ini) serta memperbarui tanggal publikasi menjadi `12 Oct 2026`. Menambahkan `suppressHydrationWarning` pada [CareerDetailsDynamic.tsx](file:///Users/dicky/Work/nomina-second/src/components/career/CareerDetailsDynamic.tsx) untuk performa rendering yang mulus tanpa hydration mismatch.

### [Removed]
- **Tetris Decorative Strip (`src/components/Footer.tsx`):** Menghapus strip animasi self-playing Tetris putih 80px beserta import modul Tetris dari Footer utama, membuat tampilan footer lebih bersih, modern, dan selaras dengan estetika minimalis gelap NOMINA.

### [Changed]
- **Page Transition Timing & Stagger Calibration ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx)):**
  - Slowed down the 3-layer page transition and increased stagger from `0.065s` to `0.18s` (duration `0.72s`, ease `power3.out` / `power3.inOut`) with a `0.08s - 0.1s` hold on the top Nomina Orange layer.
  - Each distinct color band (#000000 Black → #333333 Dark Gray → #fb5102 Orange) is now clearly and visibly distinguished as it sweeps across the screen and peels away to reveal the destination page.

### [Added]
- **Brand Identity & Favicon Refresh (`public/nomina_logo.png`, `src/components/icons.tsx`, `src/app/layout.tsx`):**
  - **3D Layered Logo Integration:** Mengganti fallback teks lama `"nomina."` + `"10 YEARS OF PEOPLE."` pada komponen [NominaLogo](file:///Users/dicky/Work/nomina-second/src/components/icons.tsx) dan `NominaLogoDark` dengan aset logo 3D layered resmi [nomina_logo.png](file:///Users/dicky/Work/nomina-second/public/nomina_logo.png) menggunakan Next.js `Image` berfitur `priority` dan `object-contain`.
  - **Header & Navbar Proportions:** Memperbarui penataan logo di [HeroSection.tsx](file:///Users/dicky/Work/nomina-second/src/components/HeroSection.tsx) (`h-10 md:h-11` di dalam container 58px) dan [Navbar.tsx](file:///Users/dicky/Work/nomina-second/src/components/Navbar.tsx) (`h-9`), mengeliminasi transformasi CSS `scale-[0.55]` lama sehingga tampilan logo tajam, presisi, dan proporsional.
  - **Multi-Resolution Favicon Suite:** Men-generate rangkaian favicon lengkap dari `public/nomina_logo.png` dengan cropping dan padding proporsional: multi-size `public/favicon.ico` (16x16, 32x32, 48x48), `public/favicon-16x16.png`, `public/favicon-32x32.png`, `public/apple-touch-icon.png` (180x180), `src/app/icon.png` (512x512), dan `src/app/apple-icon.png`.
  - **Metadata Icons Update:** Memperbarui konfigurasi `icons` di metadata [layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx) mencakup `/favicon.ico`, `/nomina_logo.png`, dan `/apple-touch-icon.png`.

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

### [Changed]
- **Page Transition Timing & Stagger Calibration ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx)):**
  - Slowed down the 3-layer page transition and increased stagger from `0.065s` to `0.18s` (duration `0.72s`, ease `power3.out` / `power3.inOut`) with a `0.08s - 0.1s` hold on the top Nomina Orange layer.
  - Each distinct color band (#000000 Black → #333333 Dark Gray → #fb5102 Orange) is now clearly and visibly distinguished as it sweeps across the screen and peels away to reveal the destination page.

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
- **Page Transition Timing & Stagger Calibration ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx)):**
  - Slowed down the 3-layer page transition and increased stagger from `0.065s` to `0.18s` (duration `0.72s`, ease `power3.out` / `power3.inOut`) with a `0.08s - 0.1s` hold on the top Nomina Orange layer.
  - Each distinct color band (#000000 Black → #333333 Dark Gray → #fb5102 Orange) is now clearly and visibly distinguished as it sweeps across the screen and peels away to reveal the destination page.

### [Added]
- **Support Transisi Antar-Halaman untuk Tombol Browser Back & Forward ([PageTransition.tsx](file:///Users/dicky/Work/nomina-second/src/components/shared/PageTransition/PageTransition.tsx), [layout.tsx](file:///Users/dicky/Work/nomina-second/src/app/layout.tsx)):**
  - Menambahkan listener `popstate`, deteksi perubahan `pathname` dari history, `pageshow` (bfcache restore), dan sinkronisasi `performance.getEntriesByType("navigation")[0].type === "back_forward"`.
  - Ketika user menekan tombol Back (`<`) atau Forward (`>`) di browser maupun swipe gesture di mobile/trackpad, sistem otomatis memainkan transisi 3-layer (#000000 Black → #333333 Dark Gray → #fb5102 Orange) naik menutupi layar dan berbalik membuka ke bawah untuk menampilkan halaman sebelumnya.

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
