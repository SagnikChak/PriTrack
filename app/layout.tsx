import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Sora, Cinzel, Fauna_One } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const sora = Sora({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400'] });
const fauna = Fauna_One({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'PriTrack',
  description: 'Track product prices from amazon effortlessly and save money on your online shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
