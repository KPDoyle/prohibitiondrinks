import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prohibition Drinks | Find Your Hidden Spirit",
  description: "Prohibition Drinks. Find your hidden spirit.",
  metadataBase: new URL("https://prohibitiondrinks.com"),
  openGraph: {
    title: "Prohibition Drinks",
    description: "Find your hidden spirit.",
    url: "https://prohibitiondrinks.com",
    siteName: "Prohibition Drinks",
    images: [{ url: "/images/hero.webp", width: 1800, height: 985 }],
    type: "website"
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
