import { useEffect, useRef } from 'react'

const BackgroundBeams = ({ className = '' }) => {
  const spotRef = useRef(null)

  useEffect(() => {
    const el = spotRef.current
    if (!el) return

    const onMove = e => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--x', `${x}%`)
      el.style.setProperty('--y', `${y}%`)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={spotRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ '--x': '50%', '--y': '40%' }}
    >
      {/* mouse spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(96,165,250,0.08), transparent 70%)',
        }}
      />
      {/* static ambient glow top-right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      {/* static ambient glow bottom-left */}
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
    </div>
  )
}

export default BackgroundBeams
