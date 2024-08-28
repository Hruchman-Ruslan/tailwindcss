import type { Metadata } from 'next';
import { Viga, Roboto } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tailwindcss',
  description: 'Project witch tailwindcss',
};

const viga = Viga({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-viga',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${viga.variable} ${roboto.variable}`}>
      <body className='container'>{children}</body>
    </html>
  );
}
