import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database, GitBranch, BarChart3, Cloud, Code2, Layers } from 'lucide-react'

const expertise = [
  { icon: Database, title: 'ETL & ELT Pipelines', desc: 'End-to-end pipeline design using Python, SQL, and Apache Spark for large-scale data transformation.' },
  { icon: Cloud, title: 'Cloud & Warehousing', desc: 'AWS Redshift, GCP, Snowflake — architecting scalable cloud-native data storage solutions.' },
  { icon: GitBranch, title: 'Data Modeling', desc: 'Structured data models for efficient querying, reporting, and analytical workloads.' },
]

const tools = [
  { icon: Code2, title: 'Python & SQL', desc: 'Core languages for data processing, analysis, and pipeline orchestration.' },
  { icon: Layers, title: 'Big Data Stack', desc: 'Apache Spark, Hadoop, Hive for distributed data processing at scale.' },
  { icon: BarChart3, title: 'Visualization', desc: 'Power BI and Tableau for business-ready dashboards and data storytelling.' },
]

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section id="about" ref={sectionRef} className="min-h-screen bg-[#0a0a0a] py-20 md:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-blue-400/60 mb-4">About Me</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Building Systems That<br />
            <span className="text-blue-400">Turn Data Into Insight</span>
          </h2>
          <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-2xl">
            Aspiring Data Engineer with hands-on experience in Python, SQL, and data analytics,
            skilled in designing ETL/ELT pipelines, data transformation, and visualization.
            Passionate about cloud platforms and scalable data systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            <p className="text-xs tracking-[0.25em] uppercase text-blue-400/50 mb-6">Core Expertise</p>
            <div className="space-y-6">
              {expertise.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} transition={{ duration: 0.4 }} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{title}</p>
                    <p className="text-white/35 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            <p className="text-xs tracking-[0.25em] uppercase text-blue-400/50 mb-6">Tools & Technologies</p>
            <div className="space-y-6">
              {tools.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} transition={{ duration: 0.4 }} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{title}</p>
                    <p className="text-white/35 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
