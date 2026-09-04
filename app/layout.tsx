import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gidonpeeper.github.io"),
  title: "Gidon Peeper",
  description:
    "AI engineer and researcher in London. Building Ayrshare's AI content-recommendation pipeline; previously at Princeton's Hasson Lab.",
  openGraph: {
    title: "Gidon Peeper",
    description:
      "AI engineer and researcher in London. Building Ayrshare's AI content-recommendation pipeline; previously at Princeton's Hasson Lab.",
    url: "https://gidonpeeper.github.io",
    images: ["/profile.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
