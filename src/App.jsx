import { useEffect, useState } from 'react'
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

  return (
    <>
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
