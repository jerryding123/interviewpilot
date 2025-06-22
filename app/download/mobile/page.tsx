'use client'
import { useEffect } from 'react'

export default function DownloadMobile() {
  useEffect(() => {
    // Small delay to allow analytics to track the page view
    const timer = setTimeout(() => {
      window.location.href = 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009'
    }, 200) // 200ms delay

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