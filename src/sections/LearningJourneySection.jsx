import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const LearningJourneySection = () => {
  const journeyStages = [
    portfolioData.learningJourney.foundation,
    portfolioData.learningJourney.development,
    portfolioData.learningJourney.problemSolving,
    portfolioData.learningJourney.exploring,
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="learning" className="py-20 md:py-32 relative overflow-hidden">
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
              08
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Learning Journey
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            How my skills evolved and continue to develop
          </p>
        </motion.div>

        {/* Journey Stages */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {journeyStages.map((stage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group p-8 rounded-xl border transition-all overflow-hidden dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out dark:hover:-translate-y-0.5 bg-white/80 backdrop-blur-md border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 transition-all duration-300 hover:-translate-y-1`}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-2">
                  <p className="text-lg font-display font-black text-indigo-600">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                </div>

                <h3 className="text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide dark:group-hover:text-indigo-300 text-slate-900 group-hover:text-indigo-700 mb-2 transition-colors">
                  {stage.title}
                </h3>

                <p className="dark:text-slate-300 text-slate-700 text-sm mb-6 font-medium">
                  {stage.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2">
                  {stage.items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 dark:text-slate-300 text-slate-800 text-sm group/item font-medium"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-indigo-600 font-bold">→</span>
                      <span className="dark:group-hover/item:text-slate-100 group-hover/item:text-indigo-700 transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-6 pt-6 dark:border-slate-700/50 border-t border-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium font-medium uppercase tracking-wider font-medium">
                    ✓ Actively practiced
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Path Visualization */}
        <motion.div
          className="mt-16 md:mt-20 p-8 md:p-12 rounded-xl border transition-all dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 relative overflow-hidden bg-white/80 backdrop-blur-md border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-8">
            The Path Forward
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-slate-900 font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white text-slate-900 mb-1">
                  Foundation Mastery
                </h4>
                <p className="dark:text-slate-300 text-slate-700">
                  Strong understanding of programming fundamentals, data structures, and algorithms
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-slate-900 font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white text-slate-900 mb-1">
                  Web Development Skills
                </h4>
                <p className="dark:text-slate-300 text-slate-700">
                  Proficient in modern web technologies including React, JavaScript, and frontend development
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/50 text-slate-900 font-bold">
                  →
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white text-slate-900 mb-1">
                  Next: Advanced Topics
                </h4>
                <p className="dark:text-slate-300 text-slate-700">
                  Exploring cybersecurity, software architecture, and research methodologies
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/30 text-slate-600 font-bold">
                  🎯
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white text-slate-900 mb-1">
                  Future Goal
                </h4>
                <p className="dark:text-slate-300 text-slate-700">
                  Master-level studies abroad and specialization in software engineering and cybersecurity
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LearningJourneySection
