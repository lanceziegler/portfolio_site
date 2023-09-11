import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/nav';
import 'animate.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lance Ziegler',
  description: 'Lance Ziegler Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='no-scrollbar scroll-smooth'>
      <body className={inter.className}>
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
