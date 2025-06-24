'use client'

import { useEffect } from 'react'

export default function DownloadMobile() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009'
    }, 1200) // Give analytics script time to fire

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        color: 'white',
        background: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: '500',
      }}
    >
      Redirecting to App Store...
    </div>
  )
}
