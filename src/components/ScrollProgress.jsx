const ScrollProgress = () => (
  <div
    className="fixed top-0 left-0 h-[2px] z-[9998] origin-left"
    style={{
      width: '100%',
      transform: 'scaleX(var(--scroll, 0))',
      transformOrigin: 'left',
      background: 'linear-gradient(90deg, #60a5fa, #93c5fd)',

    }}
  />
)

export default ScrollProgress
