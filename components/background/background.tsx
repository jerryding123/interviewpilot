import React from 'react'
import { Box, useTheme } from '@chakra-ui/react'

const Background: React.FC = () => {
  const theme = useTheme()
  
  const colors = [
    theme.colors.yellow['700'],    // Darker yellow to reduce brightness
    theme.colors.secondary['400'], // Brighter secondary
    theme.colors.cyan['400'],      // Brighter cyan
    theme.colors.teal['400'],      // Brighter teal
  ]

  const gradientBackground = `
    radial-gradient(at top left, ${colors[0]} 0%, transparent 50%),
    radial-gradient(at top right, ${colors[3]} 0%, transparent 50%),
    radial-gradient(at bottom, ${colors[1]} 0%, transparent 40%),
    radial-gradient(at bottom left, ${colors[2]} 0%, transparent 40%)
  `

  return (
    <>
      {/* Base black background */}
      <Box
        position="fixed"
        inset={0}
        zIndex={0}
        bg="#000000"
      />
      
      {/* Gradient overlay */}
      <Box
        position="fixed"
        inset={0}
        zIndex={0}
        backgroundImage={gradientBackground}
        backgroundBlendMode="screen"
        opacity={0.35}
        pointerEvents="none"
      />
    </>
  )
}

export default Background