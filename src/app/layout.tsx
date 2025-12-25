import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optivantage | Infrastructure Excellence & AI Innovation",
  description: "25 years of proven IT infrastructure expertise combined with cutting-edge AI transformation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy-900 text-text-main antialiased`}>
        {children}
      </body>
    </html>
  );
}
