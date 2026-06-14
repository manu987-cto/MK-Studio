import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MK Studio | Institut de Beauté à Vannes',
  description: 'Institut de beauté spécialisé dans les extensions de cils, maquillage mariée, restructuration sourcils et soins des ongles à Vannes (Morbihan).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${montserrat.variable}`}>
      <body style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
