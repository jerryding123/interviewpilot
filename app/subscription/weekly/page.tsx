// Create: app/subscription/weekly/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interview Pilot Pro - Upgrade Now',
  description: 'Upgrade to Interview Pilot Pro for unlimited AI interview assistance',
  other: {
    'apple-itunes-app': 'app-id=6743263009, app-argument=interviewpilot://subscription/weekly'
  }
}

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="text-center text-white max-w-md mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Interview Pilot Pro</h1>
        <p className="text-xl mb-6">Ace your interviews with AI</p>
        
        <div className="space-y-3 mb-8 text-left">
          <div className="flex items-center">
            <span className="text-green-400 mr-3">✓</span>
            <span>1,000 Copilot Uses Weekly</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-3">✓</span>
            <span>Advanced AI Speech Recognition</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-3">✓</span>
            <span>Full Copilot Customization</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-3">✓</span>
            <span>Unlimited Interview History</span>
          </div>
        </div>
        
        <a 
          href="https://apps.apple.com/app/id6743263009"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Download Interview Pilot
        </a>
        
        <p className="text-sm mt-4 opacity-75">
          Already have the app? It should open automatically.
        </p>
      </div>
    </div>
  )
}