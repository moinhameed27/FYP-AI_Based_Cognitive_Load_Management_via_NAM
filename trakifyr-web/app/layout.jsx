import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'trakifyr',
  description: 'trakifyr - Cognitive Load Estimation via Natural Activity Monitoring',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}



