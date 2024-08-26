import type { Metadata } from 'next';
import { Viga } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tailwindcss',
  description: 'Project witch tailwindcss',
};

const viga = Viga({
  subsets: ['latin'],
  weight: ['400'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={viga.className}>
      <body className='container'>{children}</body>
    </html>
  );
}
