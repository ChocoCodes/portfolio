import type { Metadata } from "next";
import { Header, Footer } from '@/components/_components';
import localFont from 'next/font/local';
import "./globals.css";

const sora = localFont({
  src: '../public/fonts/Sora-VariableFont_wght.ttf',
  variable: '--font-sora',
  display: 'swap',
  weight: '100 800'
});

const manrope = localFont({
  src: '../public/fonts/Manrope-VariableFont_wght.ttf',
  variable: '--font-manrope',
  display: 'swap',
  weight: '200 800'
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "John Octavio's Personal Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ sora.variable } ${ manrope.variable } antialiased`}
      >
      <Header />
      <section className="flex flex-col bg-background gap-6 md:gap-10 min-h-screen py-3 items-center md:py-6">
        { children }
        <Footer />
      </section>
      </body>
    </html>
  );
}
