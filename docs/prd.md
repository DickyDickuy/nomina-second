# Product Requirements Document (PRD)
# NOMINA Creative — Company Website

> **Domain:** `landing.nominanetwork.tech` (production) · `nomina-creative.com` (canonical)
> **Last Updated:** 2026-09-14

---

## 1. Ringkasan Produk

**NOMINA Creative** adalah website perusahaan (company profile) untuk sebuah **creative agency berbasis di Jakarta Selatan** yang berdiri sejak 2016. Website ini berfungsi sebagai:

- **Etalase brand & portfolio** — menampilkan proyek-proyek kreatif, event organizer, branding, dan produksi konten.
- **Recruitment hub** — halaman karir dengan detail lowongan kerja dan form lamaran lengkap (upload CV).
- **Lead generation** — form kontak untuk inquiry proyek dan kolaborasi brand.

Website ini di-*reverse-engineer* dari desain original menggunakan **AI Website Cloner Template** dan dibangun ulang sepenuhnya dalam stack modern Next.js.

---

## 2. Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Framework** | Next.js 16 (App Router, React 19, TypeScript strict) |
| **Styling** | Tailwind CSS v4 + shadcn/ui (Radix primitives) + SCSS modules |
| **Animasi** | GSAP 3, Framer Motion, Lenis (smooth scroll), Swiper |
| **3D / Visual Effects** | Three.js + React Three Fiber + Drei, ShaderGradient, OGL |
| **Backend (BaaS)** | PocketBase (`db.nominanetwork.tech`) |
| **Form Handling** | Next.js Server Actions + React 19 `useActionState` |
| **Typography** | Google Fonts — Bebas Neue (heading), News Cycle (body) |
| **Brand Color** | Scarlet Red `#FF3800` |
| **Deployment** | Dokploy → Vercel-compatible Docker build |
| **SEO** | Comprehensive metadata, JSON-LD Organization schema, `robots.ts`, `sitemap.ts` |

---

## 3. Sitemap & Halaman

```
/                          → Homepage (Hero video, About, Services, Clients, Statement)
/about                     → Profil perusahaan, tim, visi misi
/portfolio                 → Showcase proyek-proyek kreatif (gallery)
/career                    → Halaman karir utama (daftar lowongan)
/career-3d-designer        → Detail lowongan: 3D Designer
/career-account-executive  → Detail lowongan: Account Executive
/job-application           → Form lamaran kerja (dynamic berdasarkan ?jobId=...)
/contact                   → Form kontak & inquiry proyek
```

### Route Group `(agntix)`
Semua halaman inner (selain homepage) dikelompokkan dalam route group `(agntix)` yang memiliki layout sendiri dengan global SCSS styling.

---

## 4. Fitur Utama

### 4.1 Homepage
- **Hero Section** — Full-screen background video (streamed dari Cloudinary CDN), heading animasi, visually-hidden H1 untuk SEO.
- **Navbar** — Sticky navigation, staggered menu animation.
- **About Section** — Penjelasan singkat agensi dengan CTA ke `/about`.
- **Services Section** — Layanan yang ditawarkan (Strategy, Branding, Content, Events, Digital, Tech).
- **Clients Section** — Logo klien/brand yang pernah bekerja sama, CTA ke `/portfolio`.
- **Statement Section** — Brand statement / tagline visual.
- **Footer** — Informasi kontak, quick links, social media (Instagram, LinkedIn).

### 4.2 About (`/about`)
- Profil perusahaan, sejarah, tim (grid desktop + 3D coverflow carousel mobile).
- GSAP cursor hover preview pada kartu tim.
- Responsive breakpoint di 769px.

### 4.3 Portfolio (`/portfolio`)
- Gallery showcase proyek-proyek kreatif.
- React Photo View untuk lightbox image viewer.
- Responsive image sizing (`sizes` prop).

### 4.4 Career Pages
- **`/career`** — Listing lowongan aktif.
- **`/career-3d-designer`** — Detail posisi 3D Designer (deskripsi, kualifikasi, benefit).
- **`/career-account-executive`** — Detail posisi Account Executive (hybrid, Jakarta).
- Setiap halaman career detail memiliki CTA ke `/job-application?jobId=...`.

### 4.5 Job Application (`/job-application`)
- Form lamaran dinamis berdasarkan query parameter `?jobId=`.
- 3 variant: default, `3d-designer`, `account-executive`.
- Field: nama, email, posisi (dropdown), why apply, project highlight, portfolio URL, salary expectation, CV upload (PDF/DOC).
- Custom styled upload button, file preview badge (nama + ukuran file).
- Server Action `submit-application.ts` → PocketBase `job_applications` collection.
- Validasi server-side + error per field.
- React 19 `useActionState` untuk state management form.

### 4.6 Contact (`/contact`)
- Form kontak: nama, email, website (optional), pesan.
- Server Action `submit-contact.ts` → PocketBase `contact_submissions` collection.
- Validasi server-side + error per field.

---

## 5. Backend & Data

### PocketBase (`db.nominanetwork.tech`)
| Collection | Deskripsi |
|------------|-----------|
| `job_applications` | Lamaran kerja (nama, email, job_id, why_apply, project_highlight, portfolio, salary, cv file) |
| `contact_submissions` | Pesan kontak (nama, email, website, message) |

- Autentikasi menggunakan **superuser server-side** — kredensial tidak pernah terekspos ke klien.
- Koneksi melalui environment variables (`POCKETBASE_URL`, `POCKETBASE_ADMIN_EMAIL`, `POCKETBASE_ADMIN_PASSWORD`).
- Error messages di-mask untuk mencegah information disclosure (CWE-209).
- Tidak ada hardcoded credentials (CWE-798 remediated).

---

## 6. SEO & Discoverability

- **Metadata lengkap** per halaman: title unik, description, canonical URL, OpenGraph, Twitter Card.
- **Title template:** `%s | NOMINA Creative`.
- **JSON-LD** Organization structured data di homepage.
- **`robots.ts`** — Allow all crawlers, reference `sitemap.xml`.
- **`sitemap.ts`** — Auto-scan route tree, generate sitemap dinamis.
- **`llms.txt`** — Navigation map untuk AI crawlers.
- **Semantic HTML** — Proper H1 per halaman, heading hierarchy, semantic elements.
- **Keywords:** NOMINA Creative, creative agency Jakarta, event organizer, branding agency South Jakarta, dll.

---

## 7. Performa & Optimisasi

- Background video homepage di-stream dari **Cloudinary CDN** (bukan local 36MB).
- Responsive `sizes` prop pada `<Image fill>` untuk mencegah download gambar oversized.
- Google Fonts dengan `display: swap` untuk menghindari FOIT.
- **Lenis** smooth scroll.
- GSAP animations dengan defensive DOM checks untuk menghindari console warnings.

---

## 8. Design & UX

- **Brand identity:** Scarlet Red `#FF3800` sebagai warna aksen utama.
- **Typography:** Bebas Neue (heading/display), News Cycle (body text).
- **Dark-themed aesthetic** — sesuai branding creative agency.
- **Mobile-first responsive** — breakpoints khusus untuk mobile coverflow, navigation, dan layout.
- **Micro-animations:** GSAP scroll-triggered, Framer Motion transitions, hover effects.
- **3D elements:** Three.js scenes, shader gradients, WebGL effects.

---

## 9. Deployment & Infrastructure

| Aspek | Detail |
|-------|--------|
| **Hosting** | Dokploy (Docker) |
| **Domain produksi** | `landing.nominanetwork.tech` |
| **Database** | PocketBase di `db.nominanetwork.tech` |
| **Video CDN** | Cloudinary |
| **CI/CD** | GitHub Actions (lint + typecheck + build) |
| **Node.js** | ≥ 24 (pinned via `.nvmrc`) |

---

## 10. Struktur Proyek

```
src/
  app/                    # Next.js App Router routes
    (agntix)/             # Route group untuk inner pages
      about/              # /about
      career/             # /career
      career-3d-designer/ # /career-3d-designer
      career-account-executive/ # /career-account-executive
      contact/            # /contact
      job-application/    # /job-application
      portfolio/          # /portfolio
    layout.tsx            # Root layout (fonts, global metadata)
    page.tsx              # Homepage
    robots.ts             # Robots.txt generator
    sitemap.ts            # Sitemap.xml generator
  actions/                # Next.js Server Actions
    submit-application.ts # Job application form handler
    submit-contact.ts     # Contact form handler
  components/             # UI components
    ui/                   # shadcn/ui primitives
    team/                 # Team section (grid + mobile coverflow)
    forms/                # Form components (ApplicationForm, ContactUsForm)
    portfolio/            # Portfolio gallery components
    ...
  hooks/                  # Custom React hooks (GSAP animations, etc.)
  lib/                    # Utilities (cn(), PocketBase client)
  data/                   # Static data & content
  types/                  # TypeScript interfaces
public/
  images/                 # Static images & logos
  videos/                 # Local video assets
docs/
  research/               # Design token extraction & component specs
scripts/
  setup-pocketbase.mjs    # PocketBase collection setup
  sync-agent-rules.sh     # Agent rules sync
  sync-skills.mjs         # Skills sync across platforms
```

---

## 11. Status Saat Ini

- ✅ Semua 9 route segments memiliki SEO metadata lengkap
- ✅ TypeScript typecheck 100% tanpa error
- ✅ Form lamaran kerja & form kontak fungsional (PocketBase)
- ✅ Video hero di-migrate ke Cloudinary CDN
- ✅ Mobile coverflow untuk team section
- ✅ CI quality gates (lint + typecheck + build)
- 🔲 Submit sitemap ke Google Search Console
- 🔲 Verifikasi OG tags & JSON-LD di production
