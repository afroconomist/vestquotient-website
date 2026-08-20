import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VestQuotient Capital | Clarity. Precision. Wealth.',
  description: 'A modern Nigerian capital markets partner for investors, institutions and the diaspora.',
  generator: 'VestQuotient Capital',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#122a2d',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
