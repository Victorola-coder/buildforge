import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Footer, Navbar } from "./components/global";
// import localFont from "next/font/local";

// const clashmed = localFont({
//   src: "./fonts/clash/ClashGrotesk-Medium.otf",
//   variable: "--font-clash-Grotesk",
//   weight: "500",
// });

// const clashreg = localFont({
//   src: "./fonts/clash/ClashGrotesk-Regular.otf",
//   variable: "--font-clash-Grotesk",
//   weight: "400",
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://buildforge.xyz"),
  icons: {
    // icon: "/favicon.svg",
    icon: "/icon.png",
  },
  title: "buildforge - Meet, connect, Vibe with people of like minds",
  description: "we’re bullish on first time & early stage builders",
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
    url: "https://buildgforge..app",
    title: "buildforge - Meet, connect, Vibe with people of like minds",
    description: "we’re bullish on first time & early stage builders",
    siteName: "buildforge",
    locale: "en_US",
    emails: ["hello@builforge.xyz"],
  },
  twitter: {
    site: "@pxxl_space",
    creator: "@pxxl_space",
    title: "buildforge - Deploy your projects faster",
    description: "we’re bullish on first time & early stage builders",
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
        className={clsx("antialiased")}
        //  clashmed.className, clashreg.className
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
