// /download/hero page
'use client'
import { useEffect } from 'react'

export default function DownloadHero() {
  useEffect(() => {
    // Add delay to allow Vercel Analytics to track the page view
    const timer = setTimeout(() => {
      window.location.href = 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009'
    }, 600) // 600ms delay

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui'
    }}>
      <p>Redirecting to App Store...</p>
    </div>
  )
}