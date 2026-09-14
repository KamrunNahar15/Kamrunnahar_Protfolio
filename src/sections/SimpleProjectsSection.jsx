import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import PremiumProjectCard from '../components/PremiumProjectCard'

const SimpleProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-100 mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg">
            A collection of production-ready applications and innovative solutions
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
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white border border-indigo-500'
                  : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.05 }}
        >
          {filteredProjects.map((project, index) => (
            <PremiumProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-slate-400 text-lg">No projects in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default SimpleProjectsSection
