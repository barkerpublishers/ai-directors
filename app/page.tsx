import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Integration } from '@/components/sections/Integration'
import { ViralGrid } from '@/components/sections/ViralGrid'
import { DirectorsGrid } from '@/components/sections/DirectorsGrid'
import { MonetizationGrid } from '@/components/sections/MonetizationGrid'
import { ProductStack } from '@/components/sections/ProductStack'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AI Directors Academy - Master AI-Powered Content Creation',
  description: SITE_CONFIG.description,
  keywords: ['AI content creation', 'AI directors', 'AI filmmaking', 'content creation course', 'AI video production'],
  authors: [{ name: 'AI Directors Academy' }],
  openGraph: {
    title: 'AI Directors Academy',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'AI Directors Academy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Directors Academy',
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Integration />
      <ViralGrid />
      <DirectorsGrid />
      <MonetizationGrid />
      <ProductStack />
      <FAQ />
      <CTA />
      <Footer />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: SITE_CONFIG.name,
            description: SITE_CONFIG.description,
            url: SITE_CONFIG.url,
            logo: `${SITE_CONFIG.url}/images/logo.png`,
            sameAs: [
              SITE_CONFIG.links.twitter,
              SITE_CONFIG.links.github,
            ],
            offers: {
              '@type': 'Course',
              name: 'AI Directors Masterclass',
              description: 'Learn to create viral content with AI tools',
              provider: {
                '@type': 'Organization',
                name: SITE_CONFIG.name,
              },
            },
          }),
        }}
      />
    </>
  )
}