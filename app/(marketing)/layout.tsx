//app/(marketing)/layout.tsx

import { MarketingLayout } from '#components/layout'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interview Pilot - Live AI Interview Copilot',
  description: 'Get real-time interview answers during your interview with AI Copilot. Ace any technical or behavioral questions instantly.',
  keywords: ['interview', 'AI', 'copilot', 'interview assistance', 'job interview', 'AI assistant'],
  authors: [{ name: 'Interview Pilot' }],
  openGraph: {
    title: 'Interview Pilot - Live AI Interview Copilot',
    description: 'Get real-time interview answers during your interview with AI Copilot',
    url: 'https://interviewpilot.app',
    siteName: 'Interview Pilot',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interview Pilot - Live AI Interview Copilot',
    description: 'Get real-time interview answers during your interview with AI Copilot',
  },
}

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <MarketingLayout>
      {props.children}
      <Analytics />
    </MarketingLayout>
  )
}