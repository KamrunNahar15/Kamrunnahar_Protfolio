import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const ProblemSolvingSection = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="mindset" className="py-20 md:py-32 relative">
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
              09
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            How I Think
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            My problem-solving philosophy and approach
          </p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.problemSolvingPrinciples.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-xl border dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out dark:hover:-translate-y-0.5 bg-white/80 backdrop-blur-md border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 transition-all hover:-translate-y-1"
              whileHover={{ y: -6 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 left-8 inline-block">
                <span className="px-3 py-1 rounded-full bg-accent text-slate-900 font-display font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-3 dark:group-hover:text-indigo-300 group-hover:text-indigo-700 transition-colors">
                  {item.principle}
                </h3>
                <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Icon hint */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/70 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider font-medium">
                  Core principle
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Statement */}
        <motion.div
          className="p-8 md:p-12 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 bg-white/90 backdrop-blur-md border border-indigo-200 shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-accent/5 dark:via-transparent dark:to-transparent pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-4">
              The Balance
            </p>
            <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed mb-4 font-medium">
              I believe in the balance between theoretical knowledge and practical application. Every problem is an opportunity to learn, and every solution should be thoughtful, elegant, and purposeful.
            </p>
            <p className="dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium italic font-medium">
              "Clean code, clear thinking, continuous improvement."
            </p>
          </div>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          className="mt-16 md:mt-20 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-6">
            This Means
          </h3>

          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 p-4 rounded-lg dark:hover:bg-slate-800/30 hover:bg-indigo-50/50 transition-colors"
          >
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-semibold dark:text-white text-slate-900 mb-1">
                Analysis-Driven
              </p>
              <p className="dark:text-slate-300 text-slate-700">
                I take time to understand problems deeply before jumping to solutions
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 p-4 rounded-lg dark:hover:bg-slate-800/30 hover:bg-indigo-50/50 transition-colors"
          >
            <span className="text-2xl">🎯</span>
            <div>
              <p className="font-semibold dark:text-white text-slate-900 mb-1">
                Result-Oriented
              </p>
              <p className="dark:text-slate-300 text-slate-700">
                I focus on outcomes that matter and deliver value
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 p-4 rounded-lg dark:hover:bg-slate-800/30 hover:bg-indigo-50/50 transition-colors"
          >
            <span className="text-2xl">🔄</span>
            <div>
              <p className="font-semibold dark:text-white text-slate-900 mb-1">
                Iterative Learner
              </p>
              <p className="dark:text-slate-300 text-slate-700">
                I embrace feedback and continuously refine my approach
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 p-4 rounded-lg dark:hover:bg-slate-800/30 hover:bg-indigo-50/50 transition-colors"
          >
            <span className="text-2xl">🚀</span>
            <div>
              <p className="font-semibold dark:text-white text-slate-900 mb-1">
                Growth-Minded
              </p>
              <p className="dark:text-slate-300 text-slate-700">
                Every challenge is an opportunity to expand my capabilities
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSolvingSection
