import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://soft-tech.lap2q2.chatgpt.site'),
  title: 'سوفت تيك | دعم فني وصيانة كمبيوترات',
  description: 'دعم فني وصيانة أجهزة الكمبيوتر وتوفير القطع الأصلية في جميع مناطق المملكة.',
  openGraph: {
    title: 'سوفت تيك | دعمك التقني، ببساطة',
    description: 'دعم فني وصيانة وقطع كمبيوتر.',
    images: ['/og.png'],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سوفت تيك | دعمك التقني، ببساطة',
    description: 'دعم فني وصيانة وقطع كمبيوتر.',
    images: ['/og.png'],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl" className={ibmPlexSansArabic.variable}><body>{children}</body></html>; }
