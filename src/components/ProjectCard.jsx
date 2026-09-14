import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, FileText } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
  const numberBadge = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative h-full"
    >
      <div className="relative h-full p-6 md:p-7 rounded-xl dark:border-indigo-500/40 dark:bg-slate-900/80 dark:backdrop-blur-xl dark:hover:border-indigo-400/60 dark:hover:bg-slate-800/80 dark:hover:shadow-xl dark:hover:shadow-indigo-600/20 dark:hover:-translate-y-1 border-slate-800/50 bg-slate-900/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-accent/10 flex flex-col">
        {/* Number Badge */}
        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accentLight flex items-center justify-center text-slate-900 font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
          {numberBadge}
        </div>

        {/* Status Badge */}
        {project.status && (
          <div className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full bg-accent/15 text-indigo-600 text-xs font-semibold uppercase tracking-wider border border-accent/30">
              {project.status}
            </span>
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {project.name}
        </h3>

        {/* Tagline */}
        <p className="dark:text-slate-300 text-slate-700 text-sm mb-4 line-clamp-2">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 pt-4 dark:border-indigo-500/20 border-t border-slate-800/50">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                className="px-2.5 py-1 rounded-full dark:bg-slate-800/80 dark:text-slate-300 dark:border dark:border-slate-700/60 dark:hover:border-indigo-400/80 dark:hover:bg-indigo-600/20 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 bg-slate-800/60 text-slate-300 text-xs font-medium border border-slate-700/50 hover:border-accent/50 hover:text-indigo-600 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 rounded-full dark:bg-slate-800/80 dark:text-slate-300 dark:border dark:border-slate-700/60 bg-accent/10 text-indigo-600 text-xs font-medium border border-accent/30">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-3">
          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-600Light transition-colors group/link"
            >
              <Play size={14} />
              <span>Demo</span>
              <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          )}

          {project.liveDemo && project.liveDemo !== '[Live Demo Link]' && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-600Light transition-colors group/link"
            >
              <span>Live</span>
              <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          )}

          {project.github && project.github !== '[GitHub Link]' && project.github !== '[GitHub Repository Link]' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-indigo-600 transition-colors group/link"
            >
              <span>Code</span>
              <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          )}

          {project.presentation && project.presentation !== '[Presentation Link]' && (
            <a
              href={project.presentation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-indigo-600 transition-colors group/link"
            >
              <FileText size={12} />
              <span>Slides</span>
              <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
