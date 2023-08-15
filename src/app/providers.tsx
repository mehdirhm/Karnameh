// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { RtlProvider } from '@/components/rtl-provider'
import { extendTheme } from '@chakra-ui/react'
import { avatarTheme } from '@/components/QuestionCard/QuestionCard'
import { QueryClient, QueryClientProvider} from 'react-query'
import {QuestionContextProvider} from '@/contexts/QuestionContext'
const queryClient = new QueryClient()

export const theme = extendTheme({
  components: { Avatar: avatarTheme },
  
})

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {


  return (
    <QueryClientProvider client={queryClient}>
      <QuestionContextProvider>
        
      <CacheProvider>
      <ChakraProvider theme={theme}>
        <RtlProvider>
        {children}
        </RtlProvider>
      </ChakraProvider>
    </CacheProvider>
      </QuestionContextProvider>
    
    </QueryClientProvider>

  )
}