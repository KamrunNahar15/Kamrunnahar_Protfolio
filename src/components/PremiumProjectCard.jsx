import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'

const PremiumProjectCard = ({ project, index }) => {
  const getCategoryInfo = () => {
    if (project.clientType || project.badge === 'Paid Project' || project.badge === 'Client Work') {
      return { label: 'COMMERCIAL', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' }
    }
    if (project.status === 'Hackathon Project') {
      return { label: 'FEATURED', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' }
    }
    return { label: 'PROJECT', color: 'text-slate-400', bg: 'bg-slate-700/10', border: 'border-slate-600/20' }
  }

  const category = getCategoryInfo()
  const indexNum = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group h-full"
    >
      <div className="relative h-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900/80 backdrop-blur-md hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/30 flex flex-col">
        {/* Header with Category and Index */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-slate-800/50">
          <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${category.bg} ${category.color} border ${category.border}`}>
            {category.label}
          </div>
          <div className="text-sm font-bold text-slate-500 group-hover:text-indigo-400 transition-colors">
            #{indexNum}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-6 flex flex-col">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors line-clamp-2">
            {project.name}
          </h3>

          {/* Description */}
          <p className="dark:text-slate-300 text-slate-700 text-sm md:text-base leading-relaxed mb-5 flex-grow line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-slate-600 transition-all"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-5 border-t border-slate-800/50 flex flex-wrap gap-3">
            {project.demoVideo && (
              <a
                href={project.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-indigo-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all text-sm font-semibold"
              >
                <Play size={14} />
                <span>Demo</span>
              </a>
            )}

            {project.liveDemo && project.liveDemo !== '[Live Demo Link]' && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-indigo-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all text-sm font-semibold"
              >
                <span>Live</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.github && project.github !== '[GitHub Link]' && project.github !== '[GitHub Repository Link]' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-indigo-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all text-sm font-semibold"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PremiumProjectCard
