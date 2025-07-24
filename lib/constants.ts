import { Feature, Testimonial, Metric } from './types'

export const FEATURES: Feature[] = [
  {
    number: '01',
    title: 'Create Viral Videos',
    description: 'Master AI-powered tools to create engaging, viral-worthy content that captures attention and drives engagement across all platforms.',
  },
  {
    number: '02',
    title: 'Build AI Models',
    description: 'Learn to train and fine-tune custom AI models for your unique creative vision, from concept to deployment.',
  },
  {
    number: '03',
    title: 'Direct AI Productions',
    description: 'Become an AI director, orchestrating entire productions with cutting-edge tools and workflows used by industry leaders.',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Content Creator',
    company: 'Digital Studios',
    content: 'AI Directors Academy transformed my content creation process. I went from 10K to 1M views in just 3 months using their AI techniques.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Film Director',
    company: 'Indie Productions',
    content: 'The blend of traditional filmmaking with AI tools opened up possibilities I never imagined. This is the future of content creation.',
  },
  {
    name: 'Emma Watson',
    role: 'AI Artist',
    company: 'Creative AI Lab',
    content: 'Learning to build custom AI models gave me complete creative control. I can now bring any vision to life with precision.',
  },
]

export const METRICS: Metric[] = [
  {
    value: '10,000',
    label: 'Active Students',
    suffix: '+',
  },
  {
    value: '2.5M',
    label: 'Videos Created',
    suffix: '+',
  },
  {
    value: '95',
    label: 'Success Rate',
    suffix: '%',
  },
  {
    value: '4.9',
    label: 'Student Rating',
    suffix: '/5',
  },
]

export const PARTNER_LOGOS = [
  'OpenAI',
  'Runway',
  'Midjourney',
  'Stable Diffusion',
  'Adobe',
]

export const SITE_CONFIG = {
  name: 'AI Directors Academy',
  description: 'Master the art of AI-powered content creation and become a visionary director in the age of artificial intelligence.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aidirectorsacademy.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/aidirectorsacademy',
    github: 'https://github.com/aidirectorsacademy',
  },
}