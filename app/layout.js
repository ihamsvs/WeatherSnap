
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebSnap',
  description: 'Page of weather and photos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head><link rel='stylesheet' href='https://bootswatch.com/5/lux/bootstrap.min.css'></link></head>
    
      <body className={inter.className}>{children}</body>
    </html>
  )
}
