import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import Footer from './Footer'

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'kanimozhijayakumar2612@gmail.com', href: 'mailto:kanimozhijayakumar2612@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Chennai, India', href: 'https://maps.google.com/?q=Chennai,India' },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/kanimozhijayakumar' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/kanimozhi-jayakumar-021b28314/' },
  { icon: Mail, href: 'mailto:kanimozhijayakumar2612@gmail.com' },
]

const Contact = () => (
  <div className="bg-[#0a0a0a]">
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(96,165,250,0.06), transparent 65%)', filter: 'blur(60px)' }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-2 text-white/30">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 text-white">
            CONTACT <span className="text-blue-400">ME</span>
          </h2>

          <div className="space-y-5 mb-10">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-400/10 border border-blue-400/20 group-hover:bg-blue-400/15 transition-colors">
                  <Icon size={17} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] tracking-wider uppercase text-white/30">{label}</p>
                  <p className="text-sm font-medium text-white/75 group-hover:text-blue-400 transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/[0.08] text-white/35 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
)

export default Contact
