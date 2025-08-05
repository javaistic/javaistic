import SearchDialog from "@/components/search";
import { GoogleAnalytics } from "@next/third-parties/google";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Funnel_Display, Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable",
  display: "swap",
  preload: true,
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-funnel-display",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://javaistic.vercel.app"),
  title: "Javaistic - Learn Java for Free",
  description:
    "Javaistic is a free platform to learn Java programming language with interactive tutorials and resources.",
  openGraph: {
    images: "https://javaistic.vercel.app/og.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@javaistic",
    creator: "@uiuxarghya",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${funnelDisplay.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          {children}
        </RootProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
    </html>
  );
}
