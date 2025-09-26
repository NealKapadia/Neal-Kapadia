import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Neal Kapadia",
    template: "%s | Neal Kapadia",
  },
  description:
    "Projects at the intersection of AI/ML, biotech, and playful 3D UX.",
  metadataBase: new URL("https://your-domain.com"), // TODO: update to your real domain or Vercel URL
  openGraph: {
    title: "Neal Kapadia",
    description:
      "Projects at the intersection of AI/ML, biotech, and playful 3D UX.",
    url: "https://your-domain.com",
    siteName: "Neal Kapadia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neal Kapadia",
    description:
      "Projects at the intersection of AI/ML, biotech, and playful 3D UX.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Header />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
