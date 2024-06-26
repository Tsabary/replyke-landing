import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const displayFont = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-display",
});

const baseFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-default",
});
export const metadata: Metadata = {
  title: "Replyke",
  description: "Integrate Comments in Minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baseFont.variable} ${displayFont.variable} scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
