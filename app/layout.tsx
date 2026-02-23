import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naked Journalism - Strengthening Press Freedom",
  description: "A platform where citizens fund the journalism they value. Launching April 1st, 2026.",
  openGraph: {
    title: "Naked Journalism",
    description: "Strengthening press freedom by redesigning its financial foundations",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-bg-dark text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
