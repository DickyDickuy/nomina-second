import type { Metadata } from "next";
import { Bebas_Neue, News_Cycle } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const newsCycle = News_Cycle({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nomina-creative.com";
const OG_IMAGE = `${SITE_URL}/images/nomina-logo.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "NOMINA Creative — Event Organizer Jakarta (EO Jakarta) | Technical Custom Production & Rental Equipment",
    template: "%s | NOMINA Creative",
  },
  description:
    "NOMINA Creative adalah jasa Event Organizer Jakarta (EO terdekat di Jakarta Selatan). Spesialis Event Organiser, Technical Custom Production, Rental Equipment, Web Development & SaaS Management sejak 2016.",
  keywords: [
    "NOMINA",
    "NOMINA Creative",
    "EO Jakarta",
    "EO terdekat",
    "jasa event organizer Jakarta",
    "event organizer Jakarta Selatan",
    "Event Organiser Jakarta",
    "Technical Custom Production Jakarta",
    "Rental Equipment event Jakarta",
    "sewa alat event Jakarta",
    "Web Development Jakarta",
    "SaaS Management Jakarta",
    "creative event agency Indonesia",
  ],
  authors: [{ name: "NOMINA Creative", url: SITE_URL }],
  creator: "NOMINA Creative",
  publisher: "NOMINA Creative",
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
    locale: "en_US",
    url: SITE_URL,
    siteName: "NOMINA Creative",
    title:
      "NOMINA Creative — Event Organizer Jakarta (EO Jakarta) | Technical Custom Production & Rental Equipment",
    description:
      "NOMINA Creative adalah jasa Event Organizer Jakarta (EO terdekat di Jakarta Selatan). Spesialis Event Organiser, Technical Custom Production, Rental Equipment, Web Development & SaaS Management sejak 2016.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NOMINA Creative — Jasa Event Organizer Jakarta Selatan & Technical Custom Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NOMINA Creative — Event Organizer Jakarta (EO Jakarta) | Technical Custom Production & Rental Equipment",
    description:
      "NOMINA Creative adalah jasa Event Organizer Jakarta (EO terdekat di Jakarta Selatan). Spesialis Event Organiser, Technical Custom Production, Rental Equipment, Web Development & SaaS Management sejak 2016.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/images/nomina-logo.jpeg",
    apple: "/images/nomina-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${newsCycle.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
