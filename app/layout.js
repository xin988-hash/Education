import './globals.css'

export const metadata = {
  title: 'Tutor PWA',
  description: '家教平台 PWA',
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  )
}
