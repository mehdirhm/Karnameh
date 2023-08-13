// app/layout.tsx

import { Providers } from "./providers";
import './globals.css'
import { RtlProvider } from '@/components/rtl-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        direction: 'rtl',
        fontFamily: 'IranYekan'
      }}>
        <Providers>
          
          {children}

     
          
        </Providers>
      </body>
    </html>
  );
}