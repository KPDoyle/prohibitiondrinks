import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prohibition Drinks | Find Your Hidden Spirit",
  description: "Prohibition Drinks — a distinctive drinks brand inspired by the spirit, style and rebellion of the Prohibition era.",
  metadataBase: new URL("https://prohibitiondrinks.com"),
  openGraph: {
    title: "Prohibition Drinks | Find Your Hidden Spirit",
    description: "Find your hidden spirit.",
    url: "https://prohibitiondrinks.com",
    siteName: "Prohibition Drinks",
    images: [{ url: "/images/slide-end-hq.webp", width: 1600, height: 875 }],
    type: "website"
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
