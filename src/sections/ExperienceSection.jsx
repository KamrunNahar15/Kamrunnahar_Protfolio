import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const ExperienceSection = () => {
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
    <section id="experience" className="py-20 md:py-32 relative">
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
              07
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Professional Experience
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            Working experience and internships
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent transform -translate-x-1/2 md:translate-x-0 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ originY: 0 }}
          />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative md:flex md:items-stretch md:gap-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-accent ring-4 ring-slate-950 transform -translate-x-1.5 md:translate-x-0 md:-translate-x-2 hidden md:block" />

              {/* Content - Desktop */}
              <div className="pl-12 md:pl-0 md:w-1/2 md:pr-8 hidden md:block">
                <div className="group p-6 md:p-8 rounded-xl transition-all dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-400/60 dark:hover:bg-slate-800/80 dark:hover:shadow-xl dark:hover:shadow-indigo-600/20 dark:hover:-translate-y-0.5 h-full bg-white/80 backdrop-blur-md border border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Briefcase size={24} className="text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold dark:text-slate-100 dark:group-hover:text-indigo-600 text-slate-900 group-hover:text-indigo-700 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-indigo-600 font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="dark:text-slate-300 text-slate-700 text-sm mb-4">{exp.duration}</p>

                  {exp.description && exp.description !== '[INTERNSHIP DESCRIPTION]' && (
                    <p className="dark:text-slate-300 text-slate-700 mb-4">{exp.description}</p>
                  )}

                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div>
                      <p className="text-xs font-display font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          resp !== '[Responsibility 1]' &&
                          resp !== '[Responsibility 2]' &&
                          resp !== '[Responsibility 3]' && (
                            <li key={i} className="flex items-start gap-2 text-slate-400">
                              <span className="text-indigo-600 mt-1">▸</span>
                              <span>{resp}</span>
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="mt-4 pt-4 dark:border-indigo-500/20 border-t border-slate-300">
                      <p className="text-xs font-display font-bold dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium font-medium uppercase tracking-wider mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1.5 rounded-full dark:bg-slate-800/80 dark:text-slate-300 dark:border dark:border-slate-700/60 dark:hover:border-indigo-400/80 dark:hover:bg-indigo-600/20 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 bg-gradient-to-r from-accent/20 to-accent/10 text-indigo-600 text-xs font-bold uppercase tracking-wider border border-accent/30 hover:border-accent/50 hover:from-accent/30 hover:to-accent/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.assignments && exp.assignments.length > 0 && (
                    <div className="mt-6 pt-6 dark:border-indigo-500/20 border-t border-accent/20">
                      <p className="text-xs font-display font-bold text-indigo-600 uppercase tracking-wider mb-4">
                        📚 Early Assignments
                      </p>
                      <div className="space-y-3">
                        {exp.assignments.map((assignment) => (
                          <a
                            key={assignment.id}
                            href={assignment.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 rounded-lg dark:bg-slate-900/60 dark:border dark:border-indigo-500/20 dark:hover:border-indigo-400/50 dark:hover:bg-indigo-600/10 bg-slate-900/50 hover:bg-accent/10 transition-all hover:shadow-lg hover:shadow-indigo-500/10 group"
                          >
                            <p className="text-sm font-semibold dark:text-slate-300 text-slate-200 group-hover:text-indigo-600 transition-colors mb-1">
                              {assignment.title}
                            </p>
                            <p className="text-xs dark:text-slate-300 text-slate-400 mb-2">
                              {assignment.description}
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              {assignment.skills.map((skill, i) => (
                                <span key={i} className="px-2 py-0.5 rounded text-xs dark:bg-indigo-950/40 dark:text-slate-300 bg-slate-800 text-slate-300">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content - Mobile */}
              <div className="pl-12 md:hidden">
                <div className="group p-6 rounded-xl transition-all dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-400/60 dark:hover:bg-slate-800/80 dark:hover:shadow-xl dark:hover:shadow-indigo-600/20 dark:hover:-translate-y-0.5 bg-white/80 backdrop-blur-md border border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Briefcase size={20} className="text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-bold dark:text-slate-100 dark:group-hover:text-indigo-600 text-slate-900 group-hover:text-indigo-700 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-indigo-600 font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="dark:text-slate-300 text-slate-700 text-sm mb-4">{exp.duration}</p>

                  {exp.description && exp.description !== '[INTERNSHIP DESCRIPTION]' && (
                    <p className="dark:text-slate-300 text-slate-700 mb-4 text-sm">{exp.description}</p>
                  )}

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full dark:bg-slate-800/80 dark:text-slate-300 dark:border dark:border-slate-700/60 dark:hover:border-indigo-400/80 dark:hover:bg-indigo-600/20 bg-gradient-to-r from-accent/20 to-accent/10 text-indigo-600 text-xs font-bold uppercase tracking-wider border border-accent/30 hover:border-accent/50 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.assignments && exp.assignments.length > 0 && (
                    <div className="pt-4 dark:border-indigo-500/20 border-t border-accent/20">
                      <p className="text-xs font-display font-bold text-indigo-600 uppercase tracking-wider mb-3">
                        📚 Early Assignments
                      </p>
                      <div className="space-y-2">
                        {exp.assignments.map((assignment) => (
                          <a
                            key={assignment.id}
                            href={assignment.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 rounded-lg dark:bg-slate-900/60 dark:border dark:border-indigo-500/20 dark:hover:border-indigo-400/50 dark:hover:bg-indigo-600/10 bg-slate-900/50 hover:bg-accent/10 transition-all"
                          >
                            <p className="text-xs font-semibold dark:text-slate-300 text-slate-200 mb-0.5">
                              {assignment.title}
                            </p>
                            <p className="text-xs dark:text-slate-300 text-slate-400">
                              {assignment.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        {portfolioData.experience.length === 0 && (
          <motion.div
            className="mt-12 p-8 rounded-lg bg-slate-800/30 border border-slate-700/50 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400">
              Currently seeking internship and professional opportunities
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ExperienceSection
