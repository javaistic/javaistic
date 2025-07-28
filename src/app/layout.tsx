import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Funnel_Display, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-funnel-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://javaistic.vercel.app"),
  title: "Javaistic - Learn Java for Free",
  description:
    "Javaistic is a free platform to learn Java programming language with interactive tutorials and resources.",
  openGraph: {
    images: "https://javaistic.vercel.app/og.png",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${funnelDisplay.variable} font-sans antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
