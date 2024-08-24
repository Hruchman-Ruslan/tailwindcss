import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tailwindcss',
  description: 'Project witch tailwindcss',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='container'>{children}</body>
    </html>
  );
}
