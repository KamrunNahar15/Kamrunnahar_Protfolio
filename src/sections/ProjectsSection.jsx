import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import ProjectCard from '../components/ProjectCard'
import ProjectFilter from '../components/ProjectFilter'

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React & Web' },
    { id: 'cpp', label: 'C++ / OOP' },
    { id: 'assignments', label: 'Learning Assignments' },
  ]

  const getFilteredProjects = () => {
    if (activeFilter === 'all') return portfolioData.projects
    if (activeFilter === 'react') return portfolioData.projects.filter((p) => p.technologies.some((t) => ['React', 'JavaScript', 'Tailwind CSS'].includes(t)))
    if (activeFilter === 'cpp') return portfolioData.projects.filter((p) => p.technologies.includes('C++'))
    if (activeFilter === 'assignments') return portfolioData.projects.filter((p) => p.status === 'Hackathon Project' || p.status === 'Completed')
    return portfolioData.projects
  }

  const filteredProjects = getFilteredProjects()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
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
              04
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900">
            Featured Projects
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4">
            Building solutions that solve real problems
          </p>
        </motion.div>

        {/* Project Filter */}
        <ProjectFilter
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-slate-400">No projects found for this filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
