import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

  // per-section spotlight opacity (on the wrapper div)
  const sectionOpacity = {
    home:       0.7,
    about:      0.45,
    skills:     0.45,
    experience: 0.35,
    projects:   0.45,
    contact:    0.35,
  }

  useEffect(() => {
    const el = spotRef.current
    if (!el) return

    // track mouse position
    const onMove = e => {
      el.style.setProperty('--sx', `${e.clientX}px`)
      el.style.setProperty('--sy', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove)

    // observe sections and smoothly adjust opacity
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          el.style.opacity = sectionOpacity[id] ?? 0.45
        }
      })
    }, { threshold: 0.3 })

    Object.keys(sectionOpacity).forEach(id => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* global mouse spotlight */}
      <div
        ref={spotRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 30, '--sx': '50vw', '--sy': '40vh', opacity: 0.7, transition: 'opacity 1.2s ease', mixBlendMode: 'screen' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(650px circle at var(--sx) var(--sy), rgba(96,165,250,0.11), transparent 70%)' }}
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
