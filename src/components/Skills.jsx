import { useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { Code2, Layers, Cloud, Database, GitBranch, BarChart3, Server, Cpu } from 'lucide-react'

const allSkills = [
  { icon: Code2, title: 'Python & SQL', description: 'Core languages for data processing, transformation, and pipeline scripting.' },
  { icon: GitBranch, title: 'ETL & ELT Pipelines', description: 'End-to-end pipeline design and orchestration for batch and streaming data.' },
  { icon: Layers, title: 'Apache Spark', description: 'Distributed data processing with Hadoop, Hive, and Spark at scale.' },
  { icon: Cloud, title: 'Cloud Platforms', description: 'AWS Redshift, GCP — cloud-native data infrastructure and warehousing.' },
  { icon: Database, title: 'Databases', description: 'PostgreSQL, MongoDB, Cassandra, Snowflake for structured and unstructured data.' },
  { icon: BarChart3, title: 'Data Visualization', description: 'Power BI and Tableau for business dashboards and analytical reporting.' },
  { icon: Server, title: 'Frameworks', description: 'Flask, Django, React, Next.js for building data-driven web applications.' },
  { icon: Cpu, title: 'Data Modeling', description: 'Dimensional modeling, EDA, and data transformation workflows with dbt.' },
]

const TiltCard = ({ children, className }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6])

  const handleMouseMove = e => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 relative bg-black">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-2 text-white/30">What I Do Best</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            TECHNICAL <span className="text-blue-400">SKILLS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5" style={{ perspective: '1000px' }}>
          {allSkills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <TiltCard>
                <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0d0d0d] hover:border-blue-400/30 hover:shadow-glow transition-all duration-300 group h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-blue-400/10 group-hover:bg-blue-400/15 transition-colors">
                    <skill.icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5 text-white/90">{skill.title}</h3>
                  <p className="text-xs leading-relaxed text-white/35">{skill.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
