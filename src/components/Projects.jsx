import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'
import { MapPin, ChevronDown, ExternalLink } from 'lucide-react'

const projects = [
  {
    year: '2024',
    title: 'Uber Data ETL Pipeline',
    stack: 'Python · PostgreSQL · ETL · Data Modeling',
    location: 'GitHub',
    description: 'Designed and implemented an end-to-end ETL pipeline for processing Uber trip data. Performed extraction, transformation, and loading using Python and PostgreSQL. Developed structured data models for efficient querying and analytical reporting.',
    link: 'https://github.com/kanimozhijayakumar/uber-etl-data-pipeline',
  },
  {
    year: '2024',
    title: 'SQL Practice & Query Development',
    stack: 'SQL · Joins · Aggregations · Window Functions',
    location: 'GitHub',
    description: 'Developed strong SQL proficiency by practicing DDL, DML, and advanced query techniques. Wrote queries using INNER JOIN, LEFT JOIN, GROUP BY, aggregations, and window functions. Organized SQL scripts to improve query optimization and problem-solving skills.',
    link: 'https://github.com/kanimozhijayakumar/sql',
  },
  {
    year: '2023',
    title: 'Food Donation Management System',
    stack: 'React.js · Firebase · Google Maps API',
    location: 'GitHub',
    description: 'Developed a web application to streamline surplus food distribution between restaurants and NGOs. Integrated Google Maps API for real-time tracking and optimized route planning to reduce food wastage.',
    link: 'https://github.com/kanimozhijayakumar',
  },
]

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false)
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
        <div
          className="p-5 md:p-6 rounded-xl border border-white/[0.06] bg-[#0d0d0d] hover:border-blue-400/25 cursor-pointer transition-all duration-300"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold tracking-wider px-3 py-1 rounded-full bg-blue-400/10 text-blue-400">
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-white/35">
              <MapPin size={11} />{project.location}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-1.5 text-white">{project.title}</h3>
          <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded mb-3 bg-white/[0.04] text-white/45">
            {project.stack}
          </span>
          <AnimatePresence initial={false}>
            <motion.div
              initial={false}
              animate={{ height: expanded ? 'auto' : '2.8em' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="text-sm leading-relaxed text-white/45">{project.description}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-3 flex items-center justify-between">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-semibold"
            >
              <ExternalLink size={12} /> View Project
            </a>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-white/20"
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const timelineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[400px]"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.04), transparent 65%)', filter: 'blur(80px)' }}
      />

      <div className="relative max-w-3xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-2 text-white/30">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            PROJECTS
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
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
