import { Metadata } from 'next'
import { Inter, Space_Grotesk, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { StagewiseToolbar } from '@stagewise/toolbar-next'
import ReactPlugin from '@stagewise-plugins/react'
import { Navbar } from '@/components/ui/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'AI Directors Academy',
    template: '%s | AI Directors Academy',
  },
  description: 'Master the art of AI-powered content creation and become a visionary director in the age of artificial intelligence.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark smooth-scroll" suppressHydrationWarning>
      <body 
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          bebasNeue.variable,
          'font-inter antialiased bg-black text-white min-h-screen overflow-x-hidden'
        )}
      >
        <Navbar />
        {children}
        {/* <StagewiseToolbar config={{ plugins: [ReactPlugin] }} /> */}
      </body>
    </html>
  )
}