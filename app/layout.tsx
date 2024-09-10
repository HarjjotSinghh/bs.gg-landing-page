import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Antonio, Outfit } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

const antonio = Antonio({
  subsets: ['latin'],
  variable: '--font-antonio',
  weight: 'variable',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: 'variable',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BS.GG',
  description: 'BS.GG Landing Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonio.variable} ${outfit.variable} antialiased font-outfit`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark" themes={['dark']}>
          <main className="bg-background text-foreground">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
