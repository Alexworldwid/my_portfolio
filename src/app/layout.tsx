import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "my portfolio",
  description: "A simple showcase of my work and skills as a software developer.",
  openGraph: {
    title: "my portfolio",
    description: "A simple showcase of my work and skills as a software developer.",
    url: "https://my-portfolio-xcsq.vercel.app/",
    siteName: "my portfolio",
    images: [
      {
        url: "https://my-portfolio-xcsq.vercel.app/images/portfolio-pics.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "my portfolio",
    description: "A simple showcase of my work and skills as a software developer.",
    images: ["https://my-portfolio-xcsq.vercel.app/images/portfolio-pics.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${inter.variable} antialiased relative`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
