import type { Metadata, Viewport } from "next";
import { Inter, Oranienbaum } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const oranienbaum = Oranienbaum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "B.ZAHLEL INTERIORS",
  description: "Luxury Interior Design Studio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oranienbaum.variable}`}>
        {children}
      </body>
    </html>
  );
}