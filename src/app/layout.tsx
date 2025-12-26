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
<head>
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NG6P0WPYQ0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NG6P0WPYQ0');
</script>
</head>
      
      <body className={`${inter.className} bg-navy-900 text-text-main antialiased`}>
        {children}
      </body>
    </html>
  );
}

