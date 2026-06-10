import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return
    const tl = gsap.timeline({ onComplete })
    tl.fromTo(
      textRef.current,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power4.inOut' }
    )
      .to(textRef.current, { scale: 0.85, opacity: 0, duration: 0.5, ease: 'power2.in', delay: 0.3 })
      .to(containerRef.current, { clipPath: 'inset(0 0 100% 0)', duration: 0.7, ease: 'power4.inOut' })
  }, [onComplete])

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      <div
        ref={textRef}
        className="text-6xl md:text-8xl font-light text-white tracking-wider"
        style={{ clipPath: 'inset(0 100% 0 0)' }}
      >
        Kanimozhi <span className="font-semibold text-blue-400">J</span>
      </div>
    </motion.div>
  )
}

export default Preloader
