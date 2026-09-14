import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const ActivitiesSection = () => {
  if (!portfolioData.activities || portfolioData.activities.length === 0) {
    return null
  }

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
    <section id="activities" className="py-20 md:py-32 relative">
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
              Extra
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Club & Activities
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            Involvement in campus communities and clubs
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out dark:hover:-translate-y-0.5 border border-indigo-100 bg-white/80 backdrop-blur-md shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1"
              whileHover={{ y: -6 }}
            >
              {/* Icon & Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-4xl mb-3">{activity.icon || '🎓'}</p>
                  <h3 className="text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-1 dark:group-hover:text-indigo-300 group-hover:text-indigo-700 transition-colors">
                    {activity.organization}
                  </h3>
                  <p className="dark:text-slate-300 text-indigo-600 font-semibold text-sm">
                    {activity.role}
                  </p>
                </div>
                <div className="p-3 rounded-lg dark:bg-indigo-950/60 dark:group-hover:bg-indigo-900/80 bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                  <Users size={24} className="dark:text-slate-300 text-indigo-700" />
                </div>
              </div>

              {/* Type Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full dark:bg-indigo-950/60 dark:text-slate-300 dark:border dark:border-indigo-800/60 bg-indigo-50 text-indigo-700 text-xs font-display font-bold uppercase tracking-wider">
                  {activity.type}
                </span>
              </div>

              {/* Description */}
              {activity.description && (
                <p className="dark:text-slate-300 text-slate-700 mb-6 leading-relaxed">
                  {activity.description}
                </p>
              )}

              {/* Interests/Skills */}
              {activity.interests && activity.interests.length > 0 && (
                <div>
                  <p className="text-xs font-display font-bold dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium font-medium uppercase tracking-wider mb-3">
                    Areas of Interest
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activity.interests.map((interest, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg dark:bg-accent/10 dark:text-slate-300 bg-indigo-50 text-indigo-700 text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Card */}
        <motion.div
          className="mt-16 md:mt-20 p-8 md:p-10 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 border border-indigo-200 bg-white/90 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-start gap-4">
            <Award className="dark:text-slate-300 text-indigo-700 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-2">
                Why Club Involvement Matters
              </h3>
              <p className="dark:text-slate-300 font-normal text-slate-700 leading-relaxed">
                Active participation in campus clubs enhances technical skills, builds leadership experience, fosters community connections, and demonstrates commitment to continuous learning beyond the classroom.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ActivitiesSection
