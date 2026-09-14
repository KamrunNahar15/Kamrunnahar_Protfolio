import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, FileText, ArrowUpRight } from 'lucide-react'

const CleanProjectCard = ({ project, index, featured = false }) => {
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

    const rotX = (y - centerY) * 0.02
    const rotY = (centerX - x) * 0.02

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  const numberBadge = String(index + 1).padStart(2, '0')

  const getCategoryStyle = () => {
    if (project.clientType || project.badge === 'Paid Project' || project.badge === 'Client Work') {
      return { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/30', label: '🚀 Client Work' }
    }
    if (project.status === 'Hackathon Project') {
      return { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/30', label: '⭐ Featured' }
    }
    return { bg: 'bg-slate-700/20', text: 'text-slate-300', border: 'border-slate-600/30', label: '💻 Project' }
  }

  const category = getCategoryStyle()

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative h-full"
      style={{ perspective: '1000px' }}
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
          } backdrop-blur-sm flex flex-col hover:shadow-xl hover:shadow-slate-900/50`}
        >
          {/* Index Badge */}
          <div className="absolute -top-3 -right-3 z-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.05 + 0.2, type: 'spring' }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accentLight flex items-center justify-center text-slate-900 font-bold text-sm shadow-lg shadow-accent/30"
            >
              {numberBadge}
            </motion.div>
          </div>

          {/* Header */}
          <div className="p-5 md:p-6">
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold ${category.bg} ${category.text} border ${category.border}`}
              >
                {category.label}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
              {project.name}
            </h3>

            {/* Tagline */}
            <p className="dark:text-slate-300 text-slate-700 text-sm font-medium mb-4 line-clamp-1">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-5 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Pills */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-accent/50 hover:text-indigo-600 transition-all"
                  whileHover={{ scale: 1.08, y: -1 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-indigo-600 border border-accent/30">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800/50 flex flex-wrap gap-2">
              {project.demoVideo && (
                <motion.a
                  href={project.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-indigo-600 hover:border-accent/50 transition-all text-xs font-semibold flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <Play size={13} />
                  <span>Demo</span>
                </motion.a>
              )}

              {project.liveDemo && project.liveDemo !== '[Live Demo Link]' && (
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-indigo-600 hover:border-accent/50 transition-all text-xs font-semibold flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Live</span>
                  <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100" />
                </motion.a>
              )}

              {project.github && project.github !== '[GitHub Link]' && project.github !== '[GitHub Repository Link]' && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-indigo-600 hover:border-accent/50 transition-all text-xs font-semibold flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github size={13} />
                  <span>Code</span>
                </motion.a>
              )}

              {project.presentation && project.presentation !== '[Presentation Link]' && (
                <motion.a
                  href={project.presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-indigo-600 hover:border-accent/50 transition-all text-xs font-semibold flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <FileText size={13} />
                  <span>Slides</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CleanProjectCard
