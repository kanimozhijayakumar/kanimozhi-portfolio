import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Typed from 'typed.js'
import { Mail } from 'lucide-react'
import BackgroundBeams from './ui/BackgroundBeams'

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/kanimozhijayakumar' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/kanimozhi-jayakumar-021b28314/' },
  { icon: Mail, href: 'mailto:kanimozhijayakumar26@gmail.com' },
]

const Home = () => {
  const nameRef = useRef(null)
  const typedRef = useRef(null)

  useEffect(() => {
    if (!nameRef.current) return
    const text = 'Kanimozhi J'
    nameRef.current.innerHTML = ''
    const allChars = []
    const div = document.createElement('div')
    text.split('').forEach(char => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? ' ' : char
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      div.appendChild(span)
      allChars.push(span)
    })
    nameRef.current.appendChild(div)
    gsap.set(allChars, { y: 40 })
    gsap.to(allChars, { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: 'power3.out', delay: 2.2 })
  }, [])

  useEffect(() => {
    if (!typedRef.current) return
    const typed = new Typed(typedRef.current, {
      strings: ['Data Engineer', 'ETL Pipeline Developer', 'Analytics Engineer', 'Data Architect'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      startDelay: 2800,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      <BackgroundBeams />

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%]"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(96,165,250,0.07), transparent 70%)' }}
        />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl flex flex-col justify-center items-center text-center pt-24 pb-16 md:py-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="text-sm tracking-[0.2em] uppercase mb-3 text-white/35"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[3.5rem] lg:text-7xl font-bold tracking-tight mb-5 text-white">
            <span ref={nameRef} className="block">Kanimozhi J</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-blue-400" />
            <p className="text-blue-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              <span ref={typedRef} />
            </p>
            <div className="h-px w-8 bg-blue-400" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="text-sm leading-relaxed max-w-lg mb-8 text-center text-white/40"
          >
            Aspiring Data Engineer skilled in building ETL pipelines, scalable data workflows, analytical data models, and business-ready dashboards using Python, SQL, Spark, and cloud platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.4 }}
            className="flex gap-3"
          >
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 3.5 + i * 0.1 }}
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-white/40 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
