import { motion } from 'framer-motion'
import { Home, User, Folder, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'contact', label: 'Contact', icon: Mail },
]

const BottomNav = () => {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = [
      { id: 'home', tab: 'home' },
      { id: 'about', tab: 'about' },
      { id: 'skills', tab: 'about' },
      { id: 'experience', tab: 'about' },
      { id: 'projects', tab: 'projects' },
      { id: 'contact', tab: 'contact' },
    ]
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.tab)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = tab => {
    setActive(tab)
    if (tab === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
    else document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 26 }}
      className="fixed bottom-0 inset-x-0 z-50 md:hidden"
    >
      <div className="bg-black border-t border-white/[0.08] backdrop-blur-xl pb-safe">
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
