import { MarketingLayout } from '#components/layout'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function BlogApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MarketingLayout>
        <Component {...pageProps} />
      </MarketingLayout>
    </ChakraProvider>
  )
} 