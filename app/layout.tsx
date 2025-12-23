import { Header, Footer } from '@/components/_components';
import { ChatBubble } from '@/components/chat/chat-bubble';
import { isInDateRange } from '@/utils/utils';
import localFont from 'next/font/local';
import "./globals.css";
import { SnowfallWrapper } from '@/components/_components';

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
  description: "Portfolio website of John Roland Octavio."
};

const showSnow = isInDateRange("2025-12-01T00:00:00Z", "2026-01-15T23:59:59Z");

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
      <main className="relative bg-background flex flex-col w-full gap-6 min-h-screen items-center">
          { showSnow && <SnowfallWrapper /> } 
          <Header />
          { children }
          <Footer />
      </main>
      <ChatBubble />
      </body>
    </html>
  );
}
