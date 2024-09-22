'use client';

import localFont from 'next/font/local';
import './globals.css';
import { Antonio, JetBrains_Mono, Outfit } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
// import Footer from '@/components/footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import TawkTo from 'next-tawkto';
import { useEffect } from 'react';

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

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const tawk = new TawkTo('66dfe792ea492f34bc104f9f', '1i7da15o2');
    tawk.onStatusChange((status: string) => {
      console.log(status);
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="a66d08e4-4d2a-4224-a35b-dd66d0838278"></script>
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonio.variable} ${outfit.variable} ${jetBrainsMono.variable} antialiased font-jetbrains-mono`}
      >
        <TawkMessengerReact propertyId="9898745c4c2206183ea150271938f7a5d6381cf9" widgetId="1i7da15o2" />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark" themes={['dark']}>
          <main className="bg-background text-foreground">
            {children}
            {/* <Footer /> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
