import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      let current = ''
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= 120) current = item.id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

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
