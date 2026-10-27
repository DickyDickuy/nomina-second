import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PageTransition } from "@/components/shared/PageTransition/PageTransition";

const nasalization = localFont({
  src: "../fonts/Nasalization-Regular.otf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-nasalization",
});

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-aspekta",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nomina-creative.com";
const OG_IMAGE = `${SITE_URL}/images/nomina-logo.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "NOMINA Creative — Event Organizer Jakarta Terdekat | Sewa Sound System, Kursi & Technical Production",
    template: "%s | NOMINA Creative",
  },
  description:
    "NOMINA Creative — jasa Event Organizer Jakarta terdekat di Kemang, Jakarta Selatan. Sewa sound system, sewa kursi event, LED screen, staging, dan Technical Custom Production untuk corporate event, brand activation & exhibition. Hubungi +62 819-1212-1777.",
  keywords: [
    "NOMINA",
    "NOMINA Creative",
    "EO Jakarta",
    "EO terdekat",
    "event organizer Jakarta terdekat",
    "jasa event organizer Jakarta",
    "event organizer Jakarta Selatan",
    "Event Organiser Jakarta",
    "vendor event Jakarta",
    "jasa EO Jakarta",
    "sewa sound system Jakarta",
    "sewa kursi event Jakarta",
    "sewa sound system terdekat",
    "rental sound system Jakarta",
    "sewa alat event Jakarta",
    "sewa LED screen Jakarta",
    "sewa lighting event Jakarta",
    "Technical Custom Production Jakarta",
    "Rental Equipment event Jakarta",
    "production house event Jakarta",
    "corporate event organizer Jakarta",
    "brand activation Jakarta",
    "exhibition organizer Jakarta",
    "Web Development Jakarta",
    "SaaS Management Jakarta",
    "creative event agency Indonesia",
    "event production Jakarta",
  ],
  authors: [{ name: "NOMINA Creative", url: SITE_URL }],
  creator: "NOMINA Creative",
  publisher: "NOMINA Creative",
  category: "Event Organizer & Technical Production",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "NOMINA Creative",
    title:
      "NOMINA Creative — Event Organizer Jakarta Terdekat | Sewa Sound System, Kursi & Technical Production",
    description:
      "NOMINA Creative — jasa Event Organizer Jakarta terdekat di Kemang, Jakarta Selatan. Sewa sound system, sewa kursi event, LED screen, staging, dan Technical Custom Production untuk corporate event, brand activation & exhibition.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NOMINA Creative — Jasa Event Organizer Jakarta Selatan, Sewa Sound System & Technical Custom Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NOMINA Creative — Event Organizer Jakarta Terdekat | Sewa Sound System, Kursi & Technical Production",
    description:
      "NOMINA Creative — jasa Event Organizer Jakarta terdekat di Kemang, Jakarta Selatan. Sewa sound system, sewa kursi event, LED screen, staging, dan Technical Custom Production.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/nomina_logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/nomina_logo.png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${nasalization.variable} ${aspekta.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var n=window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];var isBack=n&&n.type==="back_forward";if(sessionStorage.getItem("nomina_pt_reveal")==="1"||isBack){document.documentElement.setAttribute("data-pt-covered","true");}}catch(e){}`,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html[data-pt-covered="true"] .nomina-pt-wrapper {
                visibility: visible !important;
                opacity: 1 !important;
                pointer-events: all !important;
              }
              html[data-pt-covered="true"] .nomina-pt-layer {
                transform: translate3d(0, 0%, 0) !important;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
