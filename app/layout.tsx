import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation"; // Ensure path is correct
import Footer from "./components/Footer"; // Ensure path is correct

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShreeGuruCool",
  description: "Expert SAP Training in SD, MM, and S/4HANA",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* Add the meta viewport tag here */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* You can also add other meta tags like description, charset, etc. */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Navigation /> {/* ✅ Added Navbar */}
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* ✅ Added Footer */}
      </body>
    </html>
  );
}
