import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/global.scss';
import '@/styles/vendors/rc-slider-custom.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple Air',
  description: 'Simplify Your Sky'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
