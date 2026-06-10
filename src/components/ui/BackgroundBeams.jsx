import { useEffect, useRef } from 'react'

const BackgroundBeams = ({ className = '' }) => {
  const svgRef = useRef(null)

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('.beam-path')
    if (!paths) return
    const cleanups = []

    paths.forEach((path, i) => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`

      const animate = () => {
        path.style.transition = 'none'
        path.style.strokeDashoffset = `${length}`
        requestAnimationFrame(() => {
          const duration = 4 + i * 0.8
          const delay = i * 1.2
          path.style.transition = `stroke-dashoffset ${duration}s ease-in-out ${delay}s`
          path.style.strokeDashoffset = `${-length}`
        })
      }

      animate()
      const interval = setInterval(animate, (4 + i * 0.8 + i * 1.2 + 2) * 1000)
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
          <filter id="beam-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96,165,250,0)" />
            <stop offset="50%" stopColor="rgba(96,165,250,0.5)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
          <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(147,197,253,0)" />
            <stop offset="50%" stopColor="rgba(147,197,253,0.35)" />
            <stop offset="100%" stopColor="rgba(147,197,253,0)" />
          </linearGradient>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96,165,250,0)" />
            <stop offset="50%" stopColor="rgba(96,165,250,0.2)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
        </defs>

        {/* 3 clean diagonal beams */}
        <path
          className="beam-path"
          filter="url(#beam-glow)"
          d="M-100 600 L1300 200"
          stroke="url(#g1)"
          strokeWidth="1.5"
        />
        <path
          className="beam-path"
          filter="url(#beam-glow)"
          d="M-100 300 L1300 700"
          stroke="url(#g2)"
          strokeWidth="1.2"
        />
        <path
          className="beam-path"
          d="M-100 500 L1300 400"
          stroke="url(#g3)"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export default BackgroundBeams
