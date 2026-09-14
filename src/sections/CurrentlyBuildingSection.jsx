import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const CurrentlyBuildingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const categoryColors = {
    'Current Project': 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
    'Learning': 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    'Research': 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30',
  }

  return (
    <section id="building" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              10
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Currently Building
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            What I'm working on right now
          </p>
        </motion.div>

        {/* Building Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.currentlyBuilding.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group p-8 rounded-xl border dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out dark:hover:-translate-y-0.5 ${
                categoryColors[item.category] || ''
              } bg-white/80 backdrop-blur-md border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 transition-all duration-300 hover:-translate-y-1`}
              whileHover={{ y: -8 }}
            >
              {/* Category Badge */}
              <div className="inline-block mb-4">
                <span className="px-3 py-1 rounded-full dark:bg-indigo-950/60 dark:text-slate-300 dark:border dark:border-indigo-500/40 bg-indigo-50 text-indigo-700 text-xs font-display font-bold uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-3 dark:group-hover:text-indigo-300 group-hover:text-indigo-700 transition-colors">
                {item.title}
              </h3>

              <p className="dark:text-slate-300 text-slate-700 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>

              {/* Status indicator */}
              <div className="mt-6 pt-6 dark:border-slate-800/70 border-t border-indigo-200">
                <p className="text-xs dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium uppercase tracking-wider font-medium dark:group-hover:text-indigo-300 group-hover:text-indigo-700 transition-colors">
                  🚀 Active Focus
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CurrentlyBuildingSection
