import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renji Jenkins | Software Engineering & Portfolio",
  description: "Software Engineering student at McGill University, game developer at MGFsDev, and self-hosted cloud builder.",
  keywords: ["Renji Jenkins", "McGill University", "Software Engineering", "Portfolio", "Game Dev", "Unity", "Synology NAS", "PolyEdu"],
  authors: [{ name: "Renji Jenkins" }],
  openGraph: {
    title: "Renji Jenkins | Software Engineering & Portfolio",
    description: "Software Engineering student at McGill University, game developer at MGFsDev, and self-hosted cloud builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
