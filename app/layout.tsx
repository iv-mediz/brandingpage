import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'IV Mediz — Integrated Medical Solutions',
    template: '%s — IV Mediz',
  },
  description:
    'IV Mediz connects healthcare professionals with jobs and helps users book ambulances.',
  icons: { icon: '/assets/favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
