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

export const metadata: Metadata = {
  title: "NOMINA Communication — We Design Communication Ecosystems",
  description:
    "NOMINA is a full service creative agency based in Milan. Strategy, Branding, Content, Events, PR, Digital, Tech, AI — 20 years of people.",
  icons: {
    icon: "/favicon.ico",
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
