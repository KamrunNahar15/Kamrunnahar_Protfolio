import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const EducationSection = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="education" className="py-20 md:py-32 relative">
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
              02
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Education
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            A journey through learning and growth
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8 md:space-y-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent transform -translate-x-1/2 md:translate-x-0" />

          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative md:flex md:items-stretch md:gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-accent ring-4 ring-slate-950 transform -translate-x-1.5 md:translate-x-0 md:-translate-x-2" />

              {/* Content */}
              <div
                className={`pl-12 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                }`}
              >
                <div className="group p-6 rounded-xl dark:bg-slate-800/40 dark:border-slate-700/50 dark:hover:border-accent/30 dark:hover:bg-slate-800/60 bg-white/80 backdrop-blur-md border border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 transition-all hover:-translate-y-1">
                  {/* Level Badge */}
                  <div className="inline-block mb-3">
                    <span className="px-3 py-1 rounded-full dark:bg-accent/10 dark:text-slate-300 bg-indigo-50 text-indigo-700 text-xs font-display font-bold uppercase tracking-wider">
                      {edu.level}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-2 dark:group-hover:text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    {edu.institution}
                  </h3>

                  {edu.degree && (
                    <p className="dark:text-slate-300 text-slate-700 font-semibold mb-2">
                      {edu.degree}
                    </p>
                  )}

                  <div className="flex flex-col gap-2 text-sm dark:text-slate-300 text-slate-700 mb-4">
                    <p>{edu.year}</p>
                    {edu.status && <p className="text-indigo-600">{edu.status}</p>}
                    {edu.gpa && edu.gpa !== '[HSC GPA]' && edu.gpa !== '[SSC GPA]' && (
                      <p>GPA: {edu.gpa}</p>
                    )}
                    {edu.gpa && (edu.gpa === '[HSC GPA]' || edu.gpa === '[SSC GPA]') && (
                      <p className="italic opacity-75">{edu.gpa}</p>
                    )}
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-1 text-sm dark:text-slate-300 text-slate-700">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection
