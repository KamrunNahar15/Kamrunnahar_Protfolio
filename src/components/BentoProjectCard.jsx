import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, FileText, ArrowUpRight } from 'lucide-react'
import TerminalHeader from './TerminalHeader'

const BentoProjectCard = ({ project, index, featured = false }) => {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotX = (y - centerY) * 0.05
    const rotY = (centerX - x) * 0.05

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  const categoryColors = {
    commercial: 'from-purple-500 to-pink-500',
    featured: 'from-blue-500 to-cyan-500',
    internship: 'from-amber-500 to-orange-500',
    default: 'from-slate-500 to-slate-600',
  }

  const getCategory = () => {
    if (project.status === 'Commercial' || project.clientType) return 'commercial'
    if (project.status === 'Hackathon Project') return 'featured'
    if (project.status === 'BCC Internship') return 'internship'
    return 'default'
  }

  const category = getCategory()
  const categoryLabel = category === 'commercial' ? '🚀 COMMERCIAL' : category === 'featured' ? '⭐ FEATURED' : category === 'internship' ? '🎓 BCC' : '💻 PROJECT'

  const numberBadge = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative ${featured ? 'md:col-span-2' : ''}`}
      style={{
        perspective: '1200px',
      }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 60 }}
        className="h-full"
      >
        <div
          className={`relative h-full rounded-xl overflow-hidden border transition-all duration-300 ${
            featured
              ? 'border-accent/40 bg-slate-900/60 hover:border-accent/70 hover:bg-slate-900/80'
              : 'border-slate-800/50 bg-slate-900/40 hover:border-accent/50 hover:bg-slate-900/60'
          } backdrop-blur-xl flex flex-col`}
        >
          {/* Number Badge */}
          <div className="absolute -top-4 -right-4 z-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.08 + 0.3, type: 'spring' }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accentLight flex items-center justify-center text-slate-900 font-bold text-lg shadow-xl shadow-accent/40 group-hover:scale-110 transition-transform"
            >
              {numberBadge}
            </motion.div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <motion.div
              className={`px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[category]} text-white text-xs font-bold uppercase tracking-widest shadow-lg`}
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {categoryLabel}
            </motion.div>
          </div>

          {/* Terminal Header */}
          <TerminalHeader technologies={project.technologies} projectName={project.name} />

          {/* Content */}
          <div className="flex-1 p-6 md:p-8 flex flex-col">
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
              {project.name}
            </h3>

            {/* Tagline */}
            <p className="dark:text-slate-300 text-slate-700 text-sm font-semibold mb-4 line-clamp-1">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-6 flex-grow line-clamp-2 md:line-clamp-3">
              {project.description}
            </p>

            {/* Tech Pills */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-accent/50 hover:text-indigo-600 transition-all"
                  whileHover={{ scale: 1.1, y: -2, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-indigo-600 border border-accent/30">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            {/* Action Buttons - Glassmorphic */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
              {project.demoVideo && (
                <motion.a
                  href={project.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn px-4 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-slate-700/50 text-indigo-600 hover:border-accent/50 hover:bg-accent/10 transition-all flex items-center gap-2 text-sm font-semibold"
                  whileHover={{ x: 4 }}
                >
                  <Play size={16} />
                  <span>Demo</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </motion.a>
              )}

              {project.liveDemo && project.liveDemo !== '[Live Demo Link]' && (
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn px-4 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-slate-700/50 text-indigo-600 hover:border-accent/50 hover:bg-accent/10 transition-all flex items-center gap-2 text-sm font-semibold"
                  whileHover={{ x: 4 }}
                >
                  <span>Live</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </motion.a>
              )}

              {project.github && project.github !== '[GitHub Link]' && project.github !== '[GitHub Repository Link]' && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn px-4 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-slate-700/50 text-slate-400 hover:text-indigo-600 hover:border-accent/50 hover:bg-accent/10 transition-all flex items-center gap-2 text-sm font-semibold"
                  whileHover={{ x: 4 }}
                >
                  <Github size={16} />
                  <span>Code</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </motion.a>
              )}

              {project.presentation && project.presentation !== '[Presentation Link]' && (
                <motion.a
                  href={project.presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn px-4 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-slate-700/50 text-slate-400 hover:text-indigo-600 hover:border-accent/50 hover:bg-accent/10 transition-all flex items-center gap-2 text-sm font-semibold"
                  whileHover={{ x: 4 }}
                >
                  <FileText size={16} />
                  <span>Slides</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Ambient Glow on Hover */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
            style={{ filter: 'blur(20px)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default BentoProjectCard
