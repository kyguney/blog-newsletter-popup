import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Showing interesting articles and insights.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col items-center justify-center text-center mt-16'>
          <div className='container max-w-screen-lg'>{children}</div>
        </div>
      </body>
    </html>
  );
}
