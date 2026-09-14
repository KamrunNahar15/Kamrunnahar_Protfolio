import React from 'react'
import { motion } from 'framer-motion'
import { Code, BookOpen, Trophy, Target, Briefcase, Lightbulb } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const DeveloperDashboardSection = () => {
  const dashboardItems = [
    {
      icon: BookOpen,
      label: 'Education',
      value: portfolioData.developerDashboard.education,
      color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    },
    {
      icon: Code,
      label: 'Languages',
      value: portfolioData.developerDashboard.languages,
      color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
    },
    {
      icon: Trophy,
      label: 'CP Platform',
      value: portfolioData.developerDashboard.cpPlatform,
      color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30',
    },
    {
      icon: Target,
      label: 'Problems Solved',
      value: portfolioData.developerDashboard.problemsSolved,
      color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30',
    },
    {
      icon: Briefcase,
      label: 'Internship',
      value: portfolioData.developerDashboard.internship,
      color: 'from-pink-500/20 to-pink-600/10 border-pink-500/30',
    },
    {
      icon: Lightbulb,
      label: 'Current Focus',
      value: portfolioData.developerDashboard.currentFocus,
      color: 'from-orange-500/20 to-orange-600/10 border-orange-500/30',
    },
  ]

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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="dashboard" className="py-20 md:py-32 relative">
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
              12
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Developer Profile
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            Quick snapshot of my professional status
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {dashboardItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group p-6 md:p-7 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/50 dark:hover:shadow-xl dark:hover:shadow-indigo-600/20 dark:hover:-translate-y-0.5 border border-indigo-100 bg-white/80 backdrop-blur-md shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 transition-all duration-300 hover:-translate-y-1`}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg dark:bg-slate-900/50 dark:group-hover:bg-indigo-600/20 bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                    <IconComponent className="dark:text-slate-300 text-indigo-700 dark:group-hover:scale-110 group-hover:scale-110 transition-transform" size={24} />
                  </div>
                </div>

                <p className="text-xs font-display font-bold dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium uppercase tracking-wider mb-2 font-medium">
                  {item.label}
                </p>

                <p className="text-lg md:text-xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 dark:group-hover:text-indigo-300 group-hover:text-indigo-700 transition-colors line-clamp-2">
                  {item.value}
                </p>

                {/* Hover accent line */}
                <div className="mt-4 pt-4 dark:border-slate-800/70 border-t border-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium uppercase tracking-wider font-medium">
                    ✓ Verified
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Research Interest Section */}
        <motion.div
          className="mt-16 md:mt-20 p-8 md:p-10 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 border border-indigo-200 bg-white/90 backdrop-blur-md shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-4">
              Research Interest
            </h3>
            <p className="dark:text-slate-300 text-slate-700 text-lg font-medium">
              {portfolioData.developerDashboard.researchInterest}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DeveloperDashboardSection
