import React from 'react'
import './globals.scss'
import { Inter } from 'next/font/google'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={inter.className}>
      <body>
        {children}

        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default Layout
