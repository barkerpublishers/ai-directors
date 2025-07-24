export interface Feature {
  number: string
  title: string
  description: string
  icon?: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  image?: string
}

export interface SubscribeFormData {
  email: string
  source?: string
}

export interface Metric {
  value: string
  label: string
  suffix?: string
}