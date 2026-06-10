import { useEffect, useRef } from 'react'

const BackgroundBeams = ({ className = '' }) => {
  const svgRef = useRef(null)

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('.beam-path')
    if (!paths) return
    const cleanups = []

    paths.forEach(path => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`

      const animate = () => {
        path.style.transition = 'none'
        path.style.strokeDashoffset = `${length}`
        requestAnimationFrame(() => {
          const duration = 3 + Math.random() * 4
          const delay = Math.random() * 4
          path.style.transition = `stroke-dashoffset ${duration}s ease-in-out ${delay}s`
          path.style.strokeDashoffset = `${-length}`
        })
      }

      animate()
      const interval = setInterval(animate, 8000)
      cleanups.push(() => clearInterval(interval))
    })

    return () => cleanups.forEach(fn => fn())
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="beam-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
            <stop offset="40%" stopColor="rgba(96, 165, 250, 0.2)" />
            <stop offset="60%" stopColor="rgba(96, 165, 250, 0.2)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
          </linearGradient>
          <linearGradient id="beam-blue2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(147, 197, 253, 0)" />
            <stop offset="40%" stopColor="rgba(147, 197, 253, 0.1)" />
            <stop offset="60%" stopColor="rgba(147, 197, 253, 0.1)" />
            <stop offset="100%" stopColor="rgba(147, 197, 253, 0)" />
          </linearGradient>
          <linearGradient id="beam-subtle" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
            <stop offset="50%" stopColor="rgba(96, 165, 250, 0.07)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
          </linearGradient>
        </defs>
        <path className="beam-path" d="M0 150 Q300 80 600 250 T1200 150" stroke="url(#beam-blue)" strokeWidth="1.2" />
        <path className="beam-path" d="M0 350 Q400 280 700 400 T1200 300" stroke="url(#beam-blue)" strokeWidth="1" />
        <path className="beam-path" d="M0 550 Q250 450 550 580 T1200 480" stroke="url(#beam-blue2)" strokeWidth="0.8" />
        <path className="beam-path" d="M1200 100 Q850 180 550 120 T0 250" stroke="url(#beam-blue2)" strokeWidth="1" />
        <path className="beam-path" d="M1200 400 Q900 320 600 420 T0 500" stroke="url(#beam-blue)" strokeWidth="0.8" />
        <path className="beam-path" d="M1200 650 Q800 550 400 680 T0 700" stroke="url(#beam-subtle)" strokeWidth="0.6" />
        <path className="beam-path" d="M0 700 Q350 620 700 720 T1200 650" stroke="url(#beam-subtle)" strokeWidth="0.5" />
        <path className="beam-path" d="M600 0 Q580 200 620 400 T600 800" stroke="url(#beam-blue2)" strokeWidth="0.4" />
      </svg>
    </div>
  )
}

export default BackgroundBeams
