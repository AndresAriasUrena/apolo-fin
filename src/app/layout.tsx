import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apolo - Finanzas empresariales simplificadas',
  description: 'La plataforma financiera todo-en-uno diseñada para impulsar el crecimiento de tu empresa. Gestiona pagos, gastos y tesorería desde un solo lugar.',
  keywords: 'fintech, finanzas empresariales, pagos, transferencias, tarjetas corporativas, México',
  openGraph: {
    title: 'Apolo - Finanzas empresariales simplificadas',
    description: 'La plataforma financiera todo-en-uno diseñada para impulsar el crecimiento de tu empresa.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Apolo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apolo - Finanzas empresariales simplificadas',
    description: 'La plataforma financiera todo-en-uno diseñada para impulsar el crecimiento de tu empresa.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light only" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}