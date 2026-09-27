import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "DO Originals — Video Production Portfolio",
  description: "Cinematic, editorial, footage-first video editing and production portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased font-body"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
