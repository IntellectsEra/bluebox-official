import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './styles/globals.css';
import './styles/custom.css';
import Header from '@/components/shared/header/Header';
import Footer from '@/components/shared/footer/Footer';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'BluBox Exports | Premium Door & Window Fittings Hardware Exporter',
  description:
    'BluBox Exports specializes in high-quality door and window hardware, offering a comprehensive range of fittings for international construction projects. Explore our durable, precision-engineered products designed to meet global standards.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
