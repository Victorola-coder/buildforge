import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildforge.xyz"),
  icons: {
    icon: "/favicon.svg",
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
    description:
      "we’re bullish on first time & early stage builders",
    siteName: "buildforge",
    locale: "en_US",
    emails: ["hello@builforge.xyz"],
  },
  twitter: {
    site: "@pxxl_space",
    creator: "@pxxl_space",
    title: "buildforge - Deploy your projects faster",
    description:
      "we’re bullish on first time & early stage builders",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
