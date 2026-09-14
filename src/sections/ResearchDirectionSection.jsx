import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Target, Zap } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const ResearchDirectionSection = () => {
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
    <section id="research" className="py-20 md:py-32 relative">
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
              11
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Research & Future Direction
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            Where I'm headed next
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Main Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl dark:text-slate-300 text-slate-700 leading-relaxed mb-6 font-medium">
              {portfolioData.researchDirection.description}
            </p>

            {/* Goals */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
                Primary Goal
              </h3>
              <p className="text-2xl font-display font-bold text-indigo-600">
                {portfolioData.researchDirection.goal}
              </p>
            </div>
          </motion.div>

          {/* Interest Areas */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-6">
              Research Interests
            </h3>
            {portfolioData.researchDirection.interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out bg-white/80 backdrop-blur-md border border-indigo-200 shadow-md hover:border-indigo-400 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <p className="dark:text-slate-300 text-slate-900 font-semibold dark:group-hover:text-indigo-300 group-hover:text-indigo-700 transition-colors">
                  {interest}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision Cards */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out dark:hover:-translate-y-0.5 border border-indigo-100 bg-white/80 backdrop-blur-md shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 transition-all hover:-translate-y-1"
            whileHover={{ y: -6 }}
          >
            <div className="mb-4">
              <div className="p-3 rounded-lg dark:bg-accent/10 bg-indigo-50 w-fit">
                <Lightbulb className="dark:text-slate-300 text-indigo-700" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-3 dark:group-hover:text-indigo-600 group-hover:text-indigo-700 transition-colors">
              Deep Learning
            </h3>
            <p className="dark:text-slate-300 text-slate-700 text-sm">
              Mastering advanced topics in software engineering and cybersecurity through research
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out dark:hover:-translate-y-0.5 border border-indigo-100 bg-white/80 backdrop-blur-md shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 transition-all hover:-translate-y-1"
            whileHover={{ y: -6 }}
          >
            <div className="mb-4">
              <div className="p-3 rounded-lg dark:bg-accent/10 bg-indigo-50 w-fit">
                <Target className="dark:text-slate-300 text-indigo-700" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-3 dark:group-hover:text-indigo-600 group-hover:text-indigo-700 transition-colors">
              Academic Excellence
            </h3>
            <p className="dark:text-slate-300 text-slate-700 text-sm">
              Pursuing MSc and advanced studies in a premier international university
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out dark:hover:-translate-y-0.5 border border-indigo-100 bg-white/80 backdrop-blur-md shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 transition-all hover:-translate-y-1"
            whileHover={{ y: -6 }}
          >
            <div className="mb-4">
              <div className="p-3 rounded-lg dark:bg-accent/10 bg-indigo-50 w-fit">
                <Zap className="dark:text-slate-300 text-indigo-700" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-3 dark:group-hover:text-indigo-600 group-hover:text-indigo-700 transition-colors">
              Innovation
            </h3>
            <p className="dark:text-slate-300 text-slate-700 text-sm">
              Contributing to cutting-edge research and solving real-world problems
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mt-16 md:mt-20 p-8 md:p-10 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 border border-indigo-200 bg-white/90 backdrop-blur-md shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-8">
            The Road Ahead
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-slate-900 font-bold text-sm">
                  1
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white text-slate-900 mb-1">
                  Near-term: Skill Development
                </h4>
                <p className="dark:text-slate-300 text-slate-700">
                  Deepen expertise in current technologies and explore cybersecurity foundations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-slate-900 font-bold text-sm">
                  2
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white text-slate-900 mb-1">
                  Mid-term: Professional Growth
                </h4>
                <p className="dark:text-slate-300 text-slate-700">
                  Gain practical experience through internships and real-world projects
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-slate-900 font-bold text-sm">
                  3
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold dark:text-white text-slate-900 mb-1">
                  Long-term: Graduate Studies
                </h4>
                <p className="dark:text-slate-300 text-slate-700">
                  Pursue MSc and research opportunities in software engineering and cybersecurity
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchDirectionSection
