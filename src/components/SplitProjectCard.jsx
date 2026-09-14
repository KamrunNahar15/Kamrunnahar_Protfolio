import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import ProjectImagePlaceholder from './ProjectImagePlaceholder'

const SplitProjectCard = ({ project, index }) => {
  const getCategoryStyle = () => {
    if (project.clientType || project.badge === 'Paid Project' || project.badge === 'Client Work') {
      return { label: 'COMMERCIAL', bg: 'bg-purple-600', text: 'text-white' }
    }
    if (project.status === 'Hackathon Project') {
      return { label: 'FEATURED', bg: 'bg-blue-600', text: 'text-white' }
    }
    return { label: 'PROJECT', bg: 'bg-slate-700', text: 'text-white' }
  }

  const category = getCategoryStyle()
  const indexNum = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group mb-6 md:mb-8 last:mb-0"
    >
      <div className="relative overflow-hidden rounded-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-2 min-h-96 md:min-h-80 dark:border-indigo-500/40 dark:hover:border-indigo-400/60 dark:hover:shadow-2xl dark:hover:shadow-indigo-600/20 dark:bg-slate-900/80 dark:backdrop-blur-xl bg-white/80 border border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/15 hover:-translate-y-1 backdrop-blur-md dark:hover:-translate-y-0.5">
        {/* Left Side - Visual Banner */}
        <div className="relative overflow-hidden h-64 md:h-auto md:rounded-l-xl">
          <ProjectImagePlaceholder projectName={project.name} category={category.label} />

          {/* Category Badge - Floating */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="absolute top-4 left-4 z-20"
          >
            <div className={`px-4 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest ${category.bg} ${category.text} shadow-lg backdrop-blur-md border border-white/30 hover:shadow-xl hover:border-white/50 transition-all`}>
              {category.label}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Project Details */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          {/* Index - Top Right */}
          <div className="absolute top-4 right-4 dark:text-slate-300 dark:group-hover:text-indigo-400 transition-colors font-bold text-sm text-slate-600 group-hover:text-indigo-700">
            #{indexNum}
          </div>

          <div>
            {/* Tech Stack Pills */}
            <div className="mb-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all dark:bg-slate-800/80 dark:text-slate-300 dark:border dark:border-slate-700/60 dark:hover:border-indigo-400/80 dark:hover:bg-indigo-500/20 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 bg-indigo-50 text-indigo-700 border border-indigo-200/80 hover:border-indigo-400 hover:bg-indigo-100 hover:shadow-md hover:shadow-indigo-300/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider dark:bg-slate-800/80 dark:text-slate-300 dark:border dark:border-slate-700/60 dark:hover:border-indigo-400/80 dark:hover:bg-indigo-500/20 transition-all bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-display font-black dark:text-white dark:group-hover:text-indigo-300 text-slate-900 group-hover:text-indigo-700 mb-3 transition-colors line-clamp-2">
              {project.name}
            </h3>

            {/* Description */}
            <p className="dark:text-slate-300 text-base md:text-lg leading-relaxed line-clamp-3 text-slate-700">
              {project.description}
            </p>
          </div>

          {/* Action Buttons - Bottom */}
          <div className="mt-6 pt-6 dark:border-indigo-500/20 flex flex-wrap gap-3 border-t border-slate-200">
            {project.demoVideo && (
              <a
                href={project.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm dark:border-indigo-500/50 dark:text-slate-300 dark:hover:border-indigo-400/80 dark:hover:text-indigo-200 dark:hover:bg-indigo-600/20 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 active:scale-95 border-slate-300 text-slate-800 hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-100"
              >
                <Play size={16} />
                <span>Demo</span>
              </a>
            )}

            {project.liveDemo && project.liveDemo !== '[Live Demo Link]' && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm dark:border-indigo-500/50 dark:text-slate-300 dark:hover:border-indigo-400/80 dark:hover:text-indigo-200 dark:hover:bg-indigo-600/20 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 active:scale-95 border-slate-300 text-slate-800 hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-100"
              >
                <span>Live</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && project.github !== '[GitHub Link]' && project.github !== '[GitHub Repository Link]' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm dark:border-indigo-500/50 dark:text-slate-300 dark:hover:border-indigo-400/80 dark:hover:text-indigo-200 dark:hover:bg-indigo-600/20 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 active:scale-95 border-slate-300 text-slate-800 hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-100"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SplitProjectCard
