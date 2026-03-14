import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
=======
import { ThemeProvider } from "./provider";
import dynamic from 'next/dynamic';
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";
>>>>>>> 5bb81ed (removed vercel analytics)
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Portfolio Website - hasnainwebworks",
  description: "MERN-stack web developer building custom React & Tailwind websites for startups and small businesses. Let's grow your brand with clean, responsive web design.",
=======
  title: "Hasnain Webworks - Portfolio website",
  description: "MERN-stack web developer building custom React & Tailwind websites for startups and small businesses. Let’s grow your brand with clean, responsive web design.",
>>>>>>> 5bb81ed (removed vercel analytics)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XV9LX8EKFC"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XV9LX8EKFC');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
<<<<<<< HEAD
        {children}
        <Analytics />
        <SpeedInsights />
=======
        <ThemeToggle />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
>>>>>>> 5bb81ed (removed vercel analytics)
      </body>
    </html>
  );
}