import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import SplitProjectCard from '../components/SplitProjectCard'

const SplitProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'featured', label: 'Featured' },
  ]

  // Combine all projects
  const allProjects = [
    ...portfolioData.projects,
    ...portfolioData.clientWork.projects.map((p) => ({ ...p, category: 'commercial' })),
  ]

  const getFilteredProjects = () => {
    if (activeFilter === 'all') return allProjects
    return allProjects.filter((p) => p.category === activeFilter)
  }

  const filteredProjects = getFilteredProjects()

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
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
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-3">
            Featured Projects
          </h2>
          <p className="dark:text-slate-300 text-slate-700 text-lg">
            Production-ready applications and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 border ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                  : 'dark:bg-slate-800/50 dark:text-slate-300 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800/70 bg-white/80 backdrop-blur-sm text-slate-800 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects List - Stacked Split Cards */}
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <SplitProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="dark:text-slate-300 text-slate-700 text-lg">No projects in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default SplitProjectsSection
