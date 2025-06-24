// app/components/seo/seo.tsx
import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'
import siteConfig from '#data/config'

export interface SEOProps extends NextSeoProps {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
}

export const SEO = ({ 
  title, 
  description, 
  canonical,
  noindex = false,
  nofollow = false,
  ...props 
}: SEOProps) => {
  const siteUrl = 'https://interviewpilot.app'
  const defaultTitle = 'Interview Pilot - AI Interview Copilot | Ace Your Next Job Interview'
  const defaultDescription = 'Get real-time AI-powered interview answers during live interviews. 99% accuracy, 1-second responses, 99+ languages. Download Interview Pilot and ace your next job interview.'
  
  const seoTitle = title ? `${title} | Interview Pilot` : defaultTitle
  const seoDescription = description || defaultDescription
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        noindex={noindex}
        nofollow={nofollow}
        openGraph={{
          url: canonicalUrl,
          title: seoTitle,
          description: seoDescription,
          type: 'website',
          locale: 'en_US',
          site_name: 'Interview Pilot',
          // Add images when you have them:
          // images: [
          //   {
          //     url: `${siteUrl}/static/images/og-image.jpg`,
          //     width: 1200,
          //     height: 630,
          //     alt: 'Interview Pilot - AI Interview Copilot',
          //     type: 'image/jpeg',
          //   },
          // ],
        }}
        twitter={{
          handle: '@interviewpilot',
          site: '@interviewpilot',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'interview copilot, ai interview copilot, job interview help, real-time interview answers, interview ai, ai real time interview copilot, ai interview assistant, interview preparation, technical interview, behavioral interview',
          },
          {
            name: 'author',
            content: 'Interview Pilot',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'theme-color',
            content: '#000000',
          },
          {
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent',
          },
          {
            name: 'format-detection',
            content: 'telephone=no, address=no, email=no',
          },
          {
            name: 'robots',
            content: noindex || nofollow ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}` : 'index,follow',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
          {
            rel: 'preconnect',
            href: 'https://www.youtube.com',
          },
          {
            rel: 'dns-prefetch',
            href: 'https://api.openai.com',
          },
        ]}
        {...props}
      />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Interview Pilot',
            description: seoDescription,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'iOS',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              ratingCount: '1250',
              bestRating: '5'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Interview Pilot',
              url: siteUrl,
              logo: `${siteUrl}/static/images/logo.png`
            },
            downloadUrl: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
            // Add when you have a screenshot:
            // screenshot: `${siteUrl}/static/images/app-screenshot.jpg`,
            featureList: [
              'Real-time AI interview answers',
              '99% speech recognition accuracy', 
              'Support for 99+ languages',
              'Full privacy - on-device processing',
              '1-second response time',
              'Customizable answer styles'
            ]
          })
        }}
      />
    </>
  )
}