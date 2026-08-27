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
    default: "NOMINA Communication — We Design Communication Ecosystems",
    template: "%s | NOMINA Communication",
  },
  description:
    "NOMINA is a full-service creative agency based in Milan. Strategy, Branding, Content, Events, PR, Digital, Tech, AI — 10 years of people.",
  keywords: [
    "NOMINA",
    "NOMINA Communication",
    "creative agency Milan",
    "communication agency",
    "branding agency",
    "event agency Milan",
    "digital agency",
    "PR agency",
  ],
  authors: [{ name: "NOMINA Communication", url: SITE_URL }],
  creator: "NOMINA Communication",
  publisher: "NOMINA Communication",
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
    siteName: "NOMINA Communication",
    title: "NOMINA Communication — We Design Communication Ecosystems",
    description:
      "NOMINA is a full-service creative agency based in Milan. Strategy, Branding, Content, Events, PR, Digital, Tech, AI — 10 years of people.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NOMINA Communication — Creative Agency Milan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOMINA Communication — We Design Communication Ecosystems",
    description:
      "NOMINA is a full-service creative agency based in Milan. Strategy, Branding, Content, Events, PR, Digital, Tech, AI — 10 years of people.",
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
