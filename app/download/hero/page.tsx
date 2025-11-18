// app/download/hero/page.tsx
'use client'

import { useEffect } from 'react'

export default function DownloadHero() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

    // Detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream

    // Detect Android
    const isAndroid = /android/i.test(userAgent)

    if (isIOS) {
      // Redirect to App Store
      window.location.href = 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009'
    } else if (isAndroid) {
      // Redirect to Google Play Store
      window.location.href = 'https://play.google.com/store/apps/details?id=com.liberace.interviewpilot'
    } else {
      // Default to App Store for desktop users
      window.location.href = 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009'
    }
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <p>Redirecting to download...</p>
    </div>
  )
}