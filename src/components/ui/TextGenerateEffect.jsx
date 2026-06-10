import { useEffect } from 'react'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'

const TextGenerateEffect = ({ words, className = '', delay = 0 }) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })
  const wordsArray = words.split(' ')

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        { opacity: 1, filter: 'blur(0px)' },
        { duration: 0.4, delay: stagger(0.05, { startDelay: delay }) }
      )
    }
  }, [isInView, animate, delay])

  return (
    <motion.div ref={scope} className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block mr-[0.3em]"
          style={{ opacity: 0, filter: 'blur(8px)' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default TextGenerateEffect
