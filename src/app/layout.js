import { Bitter } from 'next/font/google'
import './globals.css'
import Navigation from './components/navigation'
import Footer from './components/footer'
const bitter = Bitter({ subsets: ['latin'] })

export const metadata = {
  title: 'TripAdvisor - Discover the Best Travel Reviews',
  description: 'Find the best travel reviews and recommendations for your trip on TripAdvisor. Discover accommodations, restaurants, and tourist activities that match your preferences.',
  keywords: 'TripAdvisor, travel reviews, travel, recommendations, accommodations, restaurants, tourist activities',
  author: 'TripAdvisor',
  robots: 'index, follow',
  themeColor: '#00AA6C',
  msapplicationTileColor: '#00AA6C',

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={bitter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
