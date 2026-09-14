import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import ClientProjectCard from '../components/ClientProjectCard'

const ClientWorkSection = () => {
  if (!portfolioData.clientWork || portfolioData.clientWork.projects.length === 0) {
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
    <section id="client-work" className="py-20 md:py-32 relative">
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
            <span className="text-sm font-display font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-2">
              <Award size={16} />
              Commercial
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-4">
            {portfolioData.clientWork.title}
          </h2>
          <p className="dark:text-slate-300 text-slate-700 text-lg">
            {portfolioData.clientWork.subtitle}
          </p>
        </motion.div>

        {/* Client Work Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.clientWork.projects.map((project, index) => (
            <ClientProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom Highlight */}
        <motion.div
          className="mt-16 md:mt-20 p-8 rounded-lg border border-accent/30 bg-gradient-to-r from-accent/5 to-transparent relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="dark:text-slate-300 text-slate-700 text-lg leading-relaxed">
              💼 <span className="font-semibold text-indigo-600">Professional client delivery</span> with full commercial support, responsive design, and production-ready code. Each project is tailored to meet specific international client requirements and business objectives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientWorkSection
