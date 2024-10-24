import "./global.css";
import clsx from "clsx";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { AOS } from "./components/global";
import { Footer, Navbar } from "./components/global";

const clashmed = localFont({
  src: "./fonts/clash/ClashGrotesk-Medium.otf",
  variable: "--font-clashGroteskMedium",
  weight: "500",
});

const clashreg = localFont({
  src: "./fonts/clash/ClashGrotesk-Regular.otf",
  variable: "--font-clash-Grotesk",
  weight: "400",
});

const satoshi = localFont({
  src: "./fonts/satoshi/Satoshi-Medium.otf",
  variable: "--font-SatoshiMedium",
  weight: "500",
});

const satoshiBold = localFont({
  src: "./fonts/satoshi/Satoshi-Bold.otf",
  variable: "--font-SatoshiBold",
  weight: "700",
});

const satoshiItalic = localFont({
  src: "./fonts/satoshi/Satoshi-BoldItalic.otf",
  variable: "--font-SatoshiBoldItalic",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildforge.xyz"),
  icons: {
    icon: "/icon.png",
  },
  title: "buildforge - Meet, connect, Vibe with people of like minds",
  description: "we're bullish on first time & early stage builders",
  applicationName: "buildforge Web Application",
  authors: [{ name: "buildforge", url: "https://buildforge.xyz" }],
  keywords: [
    "Build Forge",
    "Meet",
    "Build",
    "Connect",
    "scale",
    "Vibe",
    "Tech",
    "Forge",
    "Career",
    "Web Development",
    "Cloud Deployment",
    "DevOps",
  ],
  creator: "buildforge",
  publisher: "buildforge",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://buildforge.xyz",
    title: "buildforge - Meet, connect, Vibe with people of like minds",
    description: "we're bullish on first time & early stage builders",
    siteName: "buildforge",
    locale: "en_US",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/99b81e53-b7d5-4dc5-8913-4382d2271596.svg?token=XH9ro77A1T0vWB-lYgwvzJW4jZjLG5nrKHvirdKML5U&height=436&width=1200&expires=33265447449",
        width: 1200,
        height: 630,
        alt: "buildforge OG Image",
      },
    ],
  },
  twitter: {
    site: "@thebuildforge",
    creator: "@thebuildforge",
    title: "buildforge - Meet, connect, Vibe with people of like minds",
    description: "we're bullish on first time & early stage builders",
    card: "summary_large_image",
    images: [
      "https://opengraph.b-cdn.net/production/images/99b81e53-b7d5-4dc5-8913-4382d2271596.svg?token=XH9ro77A1T0vWB-lYgwvzJW4jZjLG5nrKHvirdKML5U&height=436&width=1200&expires=33265447449",
    ],
  },
  appleWebApp: {
    capable: true,
    title: "buildforge",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "buildforge helps you, connect,  build, meet up with your idolo in tech",
  category: "Social",
  classification: "Social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "lowercase relative overlay",
          clashmed.variable,
          clashreg.variable,
          satoshi.variable,
          satoshiBold.variable,
          satoshiItalic.variable
        )}
      >
        <AOS />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
