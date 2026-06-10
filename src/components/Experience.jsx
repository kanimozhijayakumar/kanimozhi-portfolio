import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'

const experiences = [
  {
    year: '2024',
    role: 'Data Analytics Intern',
    company: 'Vcodez',
    location: 'India',
    description: 'Performed customer churn analysis using Python, Pandas, NumPy, and SQL to identify key retention factors. Cleaned and preprocessed raw data, conducted EDA, and extracted actionable business insights. Created interactive dashboards using Power BI and Tableau to support data-driven decision making.',
  },
]

const ExperienceCard = ({ exp, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex gap-4 md:gap-8"
    >
      <div className="hidden md:flex flex-col items-center pt-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.08 + 0.2 }}
          className="w-3 h-3 rounded-full border-2 border-blue-400 bg-blue-400/30 flex-shrink-0"
        />
      </div>

      <div className="flex-1 mb-6">
        <div className="p-5 md:p-6 rounded-xl border border-white/[0.06] bg-[#0d0d0d] hover:border-blue-400/20 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold tracking-wider px-3 py-1 rounded-full bg-blue-400/10 text-blue-400">
              {exp.year}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-white/35">
              <MapPin size={11} />{exp.location}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-1.5 text-white">{exp.role}</h3>
          <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded mb-3 bg-white/[0.04] text-white/50">
            {exp.company}
          </span>
          <p className="text-sm leading-relaxed text-white/45">{exp.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const timelineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{ background: 'radial-gradient(ellipse, rgba(96,165,250,0.05), transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative max-w-3xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-2 text-white/30">Work History</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          <div className="hidden md:block absolute left-[5px] top-0 bottom-0 w-[2px]">
            <div className="absolute inset-0 bg-white/[0.04]" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-blue-400/20"
              style={{ height: timelineHeight }}
            />
          </div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
