import { Quicksand } from 'next/font/google'
import '@/assets/styles/main.scss'
import { AppHeader } from '@/cmps/AppHeader'

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: `Reut's blog`,
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className='wrapper'>
          <AppHeader />
          {children}
        </div>
      </body>
    </html>
  )
}
