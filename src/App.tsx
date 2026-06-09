import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SpotlightSearch from './components/SpotlightSearch'
import Home from './pages/Home'
import Subpage from './pages/Subpage'

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { pathname, hash } = useLocation()

  // Scroll to hash element (anchor links) or top of page on route change
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <>
      <Header onOpenSearch={() => setIsSearchOpen(true)} />
      
      <Routes>
        <Route path="/" element={<Home onOpenSearch={() => setIsSearchOpen(true)} />} />
        <Route path="/*" element={<Subpage />} />
      </Routes>

      <Footer />

      <SpotlightSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  )
}
