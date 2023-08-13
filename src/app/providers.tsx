// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { RtlProvider } from '@/components/rtl-provider'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <RtlProvider>
        {children}
        </RtlProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}