import { Header, Footer } from '@/components/_components';
import localFont from 'next/font/local';
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

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

export const metadata = {
  metadataBase: new URL("https://johnrlnd.dev"),
  title: {
    default: "John Octavio",
    template: "%s | John Octavio"
  },
  description: "Portfolio website of John Roland Octavio.",
  icons: [
    { url: '/favicon.ico' },
    { url: '/logo-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/logo-16x16.png', sizes: '16x16', type: 'image/png' },
  ]
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
      <main className="relative bg-background flex flex-col w-full gap-6 min-h-screen infinite-dots items-center">
          <Header />
          { children }
          <Footer />
      </main>
      <Analytics />
      </body>
    </html>
  );
}
