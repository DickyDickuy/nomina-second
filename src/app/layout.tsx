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
    default: "NOMINA Creative — Creative Agency South Jakarta | Event Organizer & Branding",
    template: "%s | NOMINA Creative",
  },
  description:
    "NOMINA Creative is a full-service creative agency based in South Jakarta. Strategy, Branding, Content, Events, Digital, Tech — est. 2016.",
  keywords: [
    "NOMINA",
    "NOMINA Creative",
    "creative agency Jakarta",
    "event organizer Jakarta",
    "branding agency South Jakarta",
    "communication agency Indonesia",
    "digital agency Jakarta",
    "brand experience Indonesia",
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
    title: "NOMINA Creative — Creative Agency South Jakarta | Event Organizer & Branding",
    description:
      "NOMINA Creative is a full-service creative agency based in South Jakarta. Strategy, Branding, Content, Events, Digital, Tech — est. 2016.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NOMINA Creative — Creative Agency South Jakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOMINA Creative — Creative Agency South Jakarta | Event Organizer & Branding",
    description:
      "NOMINA Creative is a full-service creative agency based in South Jakarta. Strategy, Branding, Content, Events, Digital, Tech — est. 2016.",
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
