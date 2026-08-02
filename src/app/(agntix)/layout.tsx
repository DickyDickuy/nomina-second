import { Inter, Besley, Space_Grotesk, Playfair_Display, Satisfy, Teko, Phudu, Poppins, Onest } from "next/font/google";
import GlobalVideoModal from "@/components/Popup/GlobalVideoModal";
import { VideoProvider } from "@/provider/VideoProvider";
import AppProvider from "@/provider/AppProvider";
import Wrapper from "@/layouts/wrapper";
import "swiper/css/bundle";
import "./agntix-globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const besley = Besley({
  subsets: ["latin"],
  variable: "--font-besley",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: "400",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const phudu = Phudu({
  subsets: ["latin"],
  variable: "--font-phudu",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import { Navbar } from "@/components/Navbar";

export default function AgntixLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${besley.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${satisfy.variable} ${teko.variable} ${phudu.variable} ${poppins.variable} ${onest.variable}`}>
      <Navbar />
      <div className="pt-[58px]">
        <AppProvider>
          <Wrapper>
            <VideoProvider>
              {children}
            </VideoProvider>
            <GlobalVideoModal />
          </Wrapper>
        </AppProvider>
      </div>
    </div>
  );
}
