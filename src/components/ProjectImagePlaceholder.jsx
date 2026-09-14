import React from 'react'
import { motion } from 'framer-motion'

const ProjectImagePlaceholder = ({ projectName, category }) => {
  // Generate a consistent gradient based on project name hash
  const getGradientColors = (name) => {
    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash) + name.charCodeAt(i)
      hash = hash & hash // Convert to 32bit integer
    }

    const gradients = [
      'from-purple-600 via-blue-600 to-indigo-600',
      'from-blue-600 via-cyan-600 to-teal-600',
      'from-indigo-600 via-purple-600 to-pink-600',
      'from-cyan-600 via-blue-600 to-purple-600',
      'from-teal-600 via-cyan-600 to-blue-600',
      'from-pink-600 via-purple-600 to-indigo-600',
    ]

    return gradients[Math.abs(hash) % gradients.length]
  }

  const gradientClass = getGradientColors(projectName)

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradientClass} rounded-l-xl overflow-hidden flex items-center justify-center p-6 md:p-8`}>
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-5xl md:text-6xl font-display font-black mb-4 drop-shadow-lg break-words px-4">
          {projectName}
        </div>
        <div className="text-sm md:text-base font-semibold drop-shadow text-white/90">
          Project Showcase
        </div>
      </motion.div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20 blur-3xl" />
    </div>
  )
}

export default ProjectImagePlaceholder
