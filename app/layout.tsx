import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/nav';
import 'animate.css';
import RootStyleRegistry from './emotion';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Lance Ziegler',
//   description: 'Lance Ziegler Portfolio',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang='en' className='no-scrollbar scroll-smooth'>
//       <body className={inter.className}>
//         {/* <Nav /> */}
//         {children}
//       </body>
//     </html>
//   );
// }
//@ts-ignore
export default function RootLayout({ children }) {
  return (
    <html lang='en-US' className='no-scrollbar scroll-smooth'>
      <head>
        {/**Manually added <title> myself */}
        <title>Lance Ziegler</title>
      </head>
      <body>
        {/**@ts-ignore */}
        <RootStyleRegistry><Nav />{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
