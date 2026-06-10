import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
]

const scrollTo = id => {
  if (id === 'home') {
    window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const el = document.getElementById(id)
    if (!el) return
    window.__lenis ? window.__lenis.scrollTo(el, { offset: -64 }) : el.scrollIntoView({ behavior: 'smooth' })
  }
}

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const vh = window.innerHeight
      let current = 'home'
      let bestPx = 0
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        const visible = Math.max(0, Math.min(bottom, vh) - Math.max(top, 0))
        if (visible > bestPx) { bestPx = visible; current = item.id }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 hidden md:flex items-center transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 w-full flex items-center justify-center">
        <div className="flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative text-[13px] tracking-wide transition-colors duration-200 py-1 ${
                activeSection === item.id ? 'text-blue-400' : 'text-white/50 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-blue-400"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
