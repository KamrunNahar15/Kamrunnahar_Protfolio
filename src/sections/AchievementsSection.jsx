import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const AchievementsSection = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="achievements" className="py-20 md:py-32 relative">
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
              06
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Achievements & Awards
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            Recognitions and milestones along the journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 md:p-8 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out dark:hover:-translate-y-0.5 border border-indigo-100 bg-white/80 backdrop-blur-md shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1"
              whileHover={{ y: -6 }}
            >
              {/* Rank Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accentLight flex items-center justify-center text-white font-display font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4">{achievement.icon}</div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-2 dark:group-hover:text-indigo-300 group-hover:text-indigo-700 transition-colors">
                {achievement.title}
              </h3>

              <p className="dark:text-slate-300 text-slate-700 mb-4 font-medium">
                {achievement.category}
              </p>

              {achievement.times && (
                <p className="text-sm dark:text-slate-300 text-indigo-600 font-semibold mb-4">
                  Won {achievement.times} times
                </p>
              )}

              <div className="pt-4 dark:border-slate-800/70 border-t border-indigo-200">
                <p className="text-xs dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium uppercase tracking-wider font-medium">
                  {achievement.date}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl dark:bg-gradient-to-br dark:from-accent/0 dark:to-accent/0 dark:group-hover:from-accent/5 dark:group-hover:to-accent/5 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 text-center transition-all duration-300"
          >
            <p className="text-3xl font-display font-bold dark:text-slate-300 text-indigo-600 mb-1">
              {portfolioData.achievements.length}
            </p>
            <p className="text-sm dark:text-slate-300 text-slate-400 uppercase tracking-wider font-medium">
              Total Awards
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 text-center transition-all duration-300"
          >
            <p className="text-3xl font-display font-bold dark:text-slate-300 text-indigo-600 mb-1">
              2
            </p>
            <p className="text-sm dark:text-slate-300 text-slate-400 uppercase tracking-wider font-medium">
              1st Places
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 text-center transition-all duration-300"
          >
            <p className="text-3xl font-display font-bold dark:text-slate-300 text-indigo-600 mb-1">
              2026
            </p>
            <p className="text-sm dark:text-slate-300 text-slate-400 uppercase tracking-wider font-medium">
              Recent Year
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 text-center transition-all duration-300"
          >
            <p className="text-3xl font-display font-bold dark:text-slate-300 text-indigo-600 mb-1">
              🚀
            </p>
            <p className="text-sm dark:text-slate-300 text-slate-400 uppercase tracking-wider font-medium">
              Going Strong
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection
