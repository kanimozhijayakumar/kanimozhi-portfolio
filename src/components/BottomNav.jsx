import { motion } from 'framer-motion'
import { Home, User, Briefcase, Folder, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const tabs = [
  { id: 'home',       label: 'Home',       icon: Home },
  { id: 'about',      label: 'About',      icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects',   label: 'Projects',   icon: Folder },
  { id: 'contact',    label: 'Contact',    icon: Mail },
]

// which tab lights up for each section
const sectionToTab = {
  home:       'home',
  about:      'about',
  skills:     'about',
  experience: 'experience',
  projects:   'projects',
  contact:    'contact',
}

const scrollTo = id => {
  if (id === 'home') {
    window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const el = document.getElementById(id)
    if (!el) return
    window.__lenis ? window.__lenis.scrollTo(el, { offset: 0 }) : el.scrollIntoView({ behavior: 'smooth' })
  }
}

const BottomNav = () => {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = Object.keys(sectionToTab)
    const handleScroll = () => {
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 80) current = id
      }
      setActive(sectionToTab[current])
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 26 }}
      className="fixed bottom-0 inset-x-0 z-50 md:hidden"
    >
      <div className="bg-black/95 border-t border-white/[0.08] backdrop-blur-xl pb-safe">
        <div className="flex h-14">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="flex-1 flex flex-col items-center justify-center gap-0.5 relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-400/[0.07]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon
                  size={18}
                  className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-blue-400' : 'text-white/30'}`}
                />
                <span className={`relative z-10 text-[10px] transition-colors duration-200 ${isActive ? 'text-blue-400 font-medium' : 'text-white/30'}`}>
                  {label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}

export default BottomNav
