import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import CleanProjectCard from '../components/CleanProjectCard'

const BentoProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: '⚡ All Projects', icon: '⚡' },
    { id: 'commercial', label: '🚀 Client Work', icon: '🚀' },
    { id: 'featured', label: '⭐ Featured', icon: '⭐' },
    { id: 'internship', label: '🎓 BCC & Academic', icon: '🎓' },
  ]

  const allProjects = [
    ...portfolioData.projects,
    ...portfolioData.clientWork.projects.map((p) => ({ ...p, category: 'commercial' })),
  ]

  const getFilteredProjects = () => {
    if (activeFilter === 'all') return allProjects
    return allProjects.filter((p) => p.category === activeFilter)
  }

  const filteredProjects = getFilteredProjects()
  const totalProjects = allProjects.length
  const commercialCount = allProjects.filter((p) => p.category === 'commercial').length
  const featuredCount = allProjects.filter((p) => p.category === 'featured').length

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-4 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-display font-bold text-indigo-600 uppercase tracking-wider">
              04
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-4">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Metrics */}
        <motion.div
          className="mb-12 md:mb-16 p-6 rounded-xl border border-accent/30 bg-slate-900/40 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="dark:text-slate-300 text-slate-700 text-lg">
            Showcasing <span className="font-bold text-indigo-600">{totalProjects}+ Production & Academic Web Applications</span>
            {' — '}
            <span className="dark:text-slate-300 text-slate-700 text-base">{commercialCount} commercial client projects, {featuredCount} featured works, and cutting-edge internship assignments.</span>
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 backdrop-blur-xl border ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-accent to-accentLight text-white border-accent shadow-xl shadow-accent/40'
                  : 'bg-white/5 text-slate-300 border-slate-700/50 hover:border-accent/50 hover:bg-accent/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{filter.icon}</span>
              <span className="ml-2">{filter.label.split(' ')[1]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <CleanProjectCard key={project.id} project={project} index={index} featured={false} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-slate-400 text-lg">No projects found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default BentoProjectsSection
