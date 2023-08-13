// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { RtlProvider } from '@/components/rtl-provider'
import { extendTheme } from '@chakra-ui/react'
import { avatarTheme } from '@/components/QuestionCard/QuestionCard'
export const theme = extendTheme({
  components: { Avatar: avatarTheme },
  
})

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {


  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <RtlProvider>
        {children}
        </RtlProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}