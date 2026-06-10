import { useEffect, useState, useCallback, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence } from 'framer-motion'

import Preloader from './components/Preloader'
import SmoothScroll from './components/SmoothScroll'
import ScrollProgress from './components/ScrollProgress'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BottomNav from './components/BottomNav'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const spotRef = useRef(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      document.body.style.setProperty('--scroll', progress.toString())
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const handlePreloaderComplete = useCallback(() => setIsLoading(false), [])

  useEffect(() => {
    const el = spotRef.current
    if (!el) return
    const onMove = e => {
      el.style.setProperty('--sx', `${e.clientX}px`)
      el.style.setProperty('--sy', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      {/* global mouse spotlight — sits above all sections via mix-blend-mode */}
      <div
        ref={spotRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 30, '--sx': '50vw', '--sy': '40vh', mixBlendMode: 'screen' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(650px circle at var(--sx) var(--sy), rgba(96,165,250,0.12), transparent 70%)' }}
        />
      </div>

      <SmoothScroll>
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <ScrollProgress />
          <Navigation />

          <main className="relative">
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>

          {isMobile && <BottomNav />}
        </div>
      </SmoothScroll>
    </>
  )
}

export default App
