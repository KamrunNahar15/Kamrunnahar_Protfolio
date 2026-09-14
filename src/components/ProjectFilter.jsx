import React from 'react'
import { motion } from 'framer-motion'

const ProjectFilter = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-center mb-8 md:mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
            activeFilter === filter.id
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/40 dark:shadow-indigo-600/30'
              : 'dark:bg-slate-900/80 dark:backdrop-blur-xl dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800/90 dark:hover:border-indigo-500/50 dark:hover:shadow-lg dark:hover:shadow-indigo-500/15 bg-white/80 backdrop-blur-sm text-slate-800 border border-indigo-200 hover:bg-indigo-100 hover:border-indigo-400'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </motion.div>
  )
}

export default ProjectFilter
