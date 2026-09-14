import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const CompetitiveProgrammingSection = () => {
  const platforms = [
    {
      name: 'Codeforces',
      username: portfolioData.personal.codeforces,
      url: `https://codeforces.com/profile/${portfolioData.personal.codeforces}`,
      icon: '⚡',
      description: 'Competitive programming contests and problem solving',
      color: 'from-blue-500/20 to-blue-600/10',
      border: 'border-blue-500/30',
    },
    {
      name: 'Beecrowd',
      problemsSolved: portfolioData.competitiveProgramming.beecrowd.problemsSolved,
      url: 'https://beecrowd.com',
      icon: '🐝',
      description: 'Online judge platform with diverse problems',
      color: 'from-yellow-500/20 to-yellow-600/10',
      border: 'border-yellow-500/30',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="competitive-programming" className="py-20 md:py-32 relative">
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
              05
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Competitive Programming
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            Active problem solver across multiple platforms
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className={`group p-8 rounded-xl border transition-all dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-400/60 dark:hover:bg-slate-800/80 dark:hover:shadow-xl dark:hover:shadow-indigo-600/20 dark:hover:-translate-y-0.5 bg-white/80 backdrop-blur-md border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1`}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-4xl mb-2">{platform.icon}</p>
                  <h3 className="text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide dark:group-hover:text-indigo-600 text-slate-900 group-hover:text-indigo-700 transition-colors">
                    {platform.name}
                  </h3>
                </div>
                <ExternalLink size={20} className="dark:text-slate-300 dark:group-hover:text-indigo-600 transition-colors text-slate-600 group-hover:text-indigo-700" />
              </div>

              <p className="dark:text-slate-300 text-slate-700 mb-6 flex-1">
                {platform.description}
              </p>

              <div className="pt-6 dark:border-indigo-500/20 border-t border-slate-300">
                {platform.username && (
                  <div>
                    <p className="text-xs dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium font-medium uppercase tracking-wider font-medium mb-2">
                      Username
                    </p>
                    <p className="text-lg font-semibold dark:text-slate-100 text-slate-800 font-mono">
                      {platform.username}
                    </p>
                  </div>
                )}
                {platform.problemsSolved && (
                  <div>
                    <p className="text-xs dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium font-medium uppercase tracking-wider font-medium mb-2">
                      Problems Solved
                    </p>
                    <p className="text-2xl font-display font-bold text-indigo-600">
                      {platform.problemsSolved}
                    </p>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="p-8 rounded-xl border transition-all dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out bg-white/80 backdrop-blur-md border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-4">
            What I Gain From CP
          </h3>
          <ul className="space-y-3">
            {portfolioData.competitiveProgramming.achievements.map(
              (achievement, index) => (
                <li key={index} className="flex items-center gap-3 dark:text-slate-300 font-normal text-slate-700 leading-relaxed">
                  <span className="dark:text-slate-300 text-indigo-600 font-bold text-lg">✓</span>
                  <span>{achievement}</span>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out bg-white/80 backdrop-blur-md border border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 text-center transition-all duration-300"
          >
            <p className="text-5xl font-display font-bold dark:text-slate-300 text-indigo-600 mb-2">
              {portfolioData.competitiveProgramming.beecrowd.problemsSolved}
            </p>
            <p className="dark:text-slate-300 font-normal text-slate-700 leading-relaxed">Problems Solved</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out bg-white/80 backdrop-blur-md border border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 text-center transition-all duration-300"
          >
            <p className="text-5xl font-display font-bold dark:text-slate-300 text-indigo-600 mb-2">
              🎯
            </p>
            <p className="dark:text-slate-300 font-normal text-slate-700 leading-relaxed">Active Problem Solver</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompetitiveProgrammingSection
