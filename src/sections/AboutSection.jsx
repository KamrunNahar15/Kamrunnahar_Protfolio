import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="about" className="py-20 md:py-32 relative">
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
              01
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          {portfolioData.personal.profileImage && (
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1 flex justify-center lg:justify-start p-4 relative z-10 overflow-visible"
            >
              <img
                src={portfolioData.personal.profileImage}
                alt={portfolioData.personal.name}
                className="w-56 h-56 md:w-64 md:h-64 rounded-xl object-cover border-4 border-indigo-500/40 shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300"
              />
            </motion.div>
          )}

          {/* Main Bio */}
          <motion.div
            variants={itemVariants}
            className={portfolioData.personal.profileImage ? "lg:col-span-2" : "lg:col-span-2"}
          >
            <p className="text-lg md:text-xl dark:text-slate-300 text-slate-800 leading-relaxed mb-6">
              {portfolioData.about.intro}
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
              I'm focused on building practical solutions, honing my problem-solving skills through competitive programming, and preparing for a career in software engineering and research. My journey combines academic learning with hands-on project experience.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            {portfolioData.about.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg transition-all group dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-400/60 dark:hover:bg-slate-800/80 dark:hover:shadow-lg dark:hover:shadow-indigo-500/15 dark:hover:-translate-y-1 bg-white/80 backdrop-blur-md border border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
                whileHover={{ y: -4, borderColor: 'rgb(99, 102, 241)' }}
              >
                <p className="text-xs font-display font-bold dark:text-slate-300 text-indigo-600 uppercase tracking-wider mb-1">
                  {highlight.label}
                </p>
                <p className="dark:text-indigo-100 dark:group-hover:text-indigo-200 text-slate-900 group-hover:text-indigo-700 font-semibold transition-colors">
                  {highlight.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-16 md:my-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ originX: 0 }}
        >
          <div className="h-px dark:bg-gradient-to-r dark:from-indigo-500/30 dark:via-indigo-500/10 dark:to-transparent bg-gradient-to-r from-indigo-600/40 via-indigo-600/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
