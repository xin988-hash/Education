import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Tutor PWA',
  description: '家教平台 PWA'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
