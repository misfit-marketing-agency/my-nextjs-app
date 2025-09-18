import { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import BaseLayout from "@/components/layouts/base-layout";
import { cn } from "@/lib/utils";
import siteMetadata from "@/lib/metadata";
import { getURL } from "@/lib/config";

import "./globals.css";

export const metadata = {
  metadataBase: new URL(getURL()),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: {
      template: `%s | ${siteMetadata.title}`,
      default: siteMetadata.title,
    },
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: `%s | ${siteMetadata.title}`,
      default: siteMetadata.title,
    },
    description: siteMetadata.description,
    creator: siteMetadata.author,
    images: [siteMetadata.socialBanner],
  },
} satisfies Metadata;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const bogart = localFont({
  src: [
    { path: "../fonts/bogart_/Bogart-Extralight.ttf", weight: "200" },
    { path: "../fonts/bogart_/Bogart-Light.ttf", weight: "300" },
    { path: "../fonts/bogart_/Bogart-Regular.ttf", weight: "400" },
    { path: "../fonts/bogart_/Bogart-Medium.ttf", weight: "500" },
    { path: "../fonts/bogart_/Bogart-Bold.ttf", weight: "700" },
    { path: "../fonts/bogart_/Bogart-Extrabold.ttf", weight: "800" },
  ],
  variable: "--font-bogart",
});
const glifko = localFont({
  src: [
    { path: "../fonts/tg-glifko_/TgGlifko-Extralight.otf", weight: "200" },
    { path: "../fonts/tg-glifko_/TgGlifko-Light.otf", weight: "300" },
    { path: "../fonts/tg-glifko_/TgGlifko-Regular.otf", weight: "400" },
    { path: "../fonts/tg-glifko_/TgGlifko-Medium.otf", weight: "500" },
    { path: "../fonts/tg-glifko_/TgGlifko-Semibold.otf", weight: "600" },
    { path: "../fonts/tg-glifko_/TgGlifko-Bold.otf", weight: "700" },
    { path: "../fonts/tg-glifko_/TgGlifko-Extrabold.otf", weight: "800" },
  ],
  variable: "--font-glifko",
});
const konstanz = localFont({
  src: [
    { path: "../fonts/konstanz_/Konstanz-Thin.otf", weight: "200" },
    { path: "../fonts/konstanz_/Konstanz-Light.otf", weight: "300" },
    { path: "../fonts/konstanz_/Konstanz-Regular.otf", weight: "400" },
    { path: "../fonts/konstanz_/Konstanz-Bold.otf", weight: "700" },
    // { path: "../fonts/konstanz_/Konstanz-Black.otf", weight: "900" },
  ],
  variable: "--font-konstanz",
});
const georgia = localFont({
  src: [
    { path: "../fonts/georgia_/Georgia-Regular.ttf", weight: "400" },
    { path: "../fonts/georgia_/Georgia-Bold.ttf", weight: "700" },
  ],
  variable: "--font-georgia",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={cn(
          bogart.variable,
          glifko.variable,
          konstanz.variable,
          georgia.variable,
          inter.variable,
          geistMono.variable
        )}
      >
        <BaseLayout>{children}</BaseLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
