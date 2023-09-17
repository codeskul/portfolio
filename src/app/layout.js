import './globals.css'

export const metadata = {
  title: 'Codeskul - Sanjay Patel',
  description: 'Sanjay Patel Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
