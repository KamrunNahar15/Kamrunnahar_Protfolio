import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const ClientProjectCard = ({ project, index }) => {
  const numberBadge = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative h-full"
    >
      <div className="relative h-full p-6 md:p-7 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 via-slate-900/40 to-slate-950/40 backdrop-blur-sm hover:border-accent/60 transition-all duration-300 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-accent/20 flex flex-col">
        {/* Number Badge */}
        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accentLight flex items-center justify-center text-slate-900 font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
          {numberBadge}
        </div>

        {/* Client Badge */}
        <div className="mb-4 inline-block">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-accent/30 to-accent/10 text-indigo-600 text-xs font-semibold uppercase tracking-wider border border-accent/30">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {project.name}
        </h3>

        {/* Tagline */}
        <p className="dark:text-slate-300 text-slate-700 text-sm font-semibold mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 pt-4 border-t border-accent/20">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                className="px-2.5 py-1 rounded-full bg-accent/15 text-indigo-600 text-xs font-medium border border-accent/30 hover:bg-accent/25 hover:border-accent/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 rounded-full bg-accent/10 text-indigo-600 text-xs font-medium border border-accent/30">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* View Project Button */}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent/20 to-accent/10 text-indigo-600 hover:from-accent/30 hover:to-accent/20 border border-accent/30 hover:border-accent/50 font-semibold text-sm transition-all hover:gap-3 w-full justify-center"
          >
            <span>View Project</span>
            <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ClientProjectCard
