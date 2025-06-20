'use client'

import { useEffect } from 'react'

export default function DownloadHero() {
  useEffect(() => {
    // Redirect to App Store immediately
    window.location.href = 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009'
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