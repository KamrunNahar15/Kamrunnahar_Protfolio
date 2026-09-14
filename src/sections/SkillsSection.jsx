import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: portfolioData.skills.programming,
      icon: '💻',
      color: 'from-purple-500/20 to-purple-600/10',
      border: 'border-purple-500/30',
    },
    {
      title: 'Web Development',
      skills: portfolioData.skills.webDevelopment,
      icon: '🌐',
      color: 'from-blue-500/20 to-blue-600/10',
      border: 'border-blue-500/30',
    },
    {
      title: 'Computer Science',
      skills: portfolioData.skills.computerScience,
      icon: '⚙️',
      color: 'from-cyan-500/20 to-cyan-600/10',
      border: 'border-cyan-500/30',
    },
    {
      title: 'Tools & Platforms',
      skills: portfolioData.skills.tools,
      icon: '🛠️',
      color: 'from-orange-500/20 to-orange-600/10',
      border: 'border-orange-500/30',
    },
    {
      title: 'Currently Exploring',
      skills: portfolioData.skills.exploring,
      icon: '🔍',
      color: 'from-pink-500/20 to-pink-600/10',
      border: 'border-pink-500/30',
    },
  ]

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

  return (
    <section id="skills" className="py-20 md:py-32 relative">
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
              03
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Skills & Expertise
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            Technologies and concepts I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 md:p-8 rounded-xl border transition-all dark:bg-slate-900/90 dark:backdrop-blur-xl dark:border dark:border-slate-800/70 dark:hover:border-cyan-400/60 dark:hover:shadow-2xl dark:hover:shadow-indigo-500/20 dark:hover:-translate-y-1 transition-all duration-300 ease-out transition-all duration-300 hover:-translate-y-0.5 bg-white/80 backdrop-blur-md border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1"
              whileHover={{ y: -6 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-1">
                    {category.title}
                  </h3>
                </div>
                <div className="p-2.5 rounded-lg dark:bg-slate-800 dark:text-slate-300 font-normal leading-relaxed bg-indigo-50 text-indigo-700 transition-all group-hover:scale-110">
                  <span className="text-2xl">{category.icon}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-all dark:bg-indigo-950/60 dark:text-cyan-300 dark:border dark:border-indigo-800/60 dark:hover:bg-indigo-900/80 dark:hover:text-white dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 transition-all dark:hover:bg-indigo-900/70 dark:hover:text-white dark:hover:border-indigo-400 dark:hover:text-white dark:hover:bg-slate-700/80 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 bg-indigo-50 text-indigo-700 border border-indigo-200/80 hover:bg-indigo-100 hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-300/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Visual Element */}
              <div className="mt-6 pt-6 dark:border-slate-700/40 dark:opacity-0 group-hover:opacity-100 transition-opacity border-slate-300 opacity-100">
                <p className="text-xs dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium font-medium uppercase tracking-wider font-medium">
                  Actively used
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="mt-16 md:mt-20 p-6 rounded-lg text-center dark:bg-slate-900/90 dark:backdrop-blur-xl dark:border dark:border-slate-800/70 dark:hover:border-indigo-500/50 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-300 hover:-translate-y-0.5 bg-slate-100 border border-slate-300 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -2 }}
        >
          <p className="dark:text-slate-300 text-slate-700 text-sm md:text-base">
            Constantly learning and exploring new technologies. These skills represent my current expertise and active areas of development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
