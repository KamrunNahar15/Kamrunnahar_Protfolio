import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Code2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import StatsCounter from '../components/StatsCounter'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/kamrunnahar15',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Code2,
      href: `https://codeforces.com/profile/${portfolioData.personal.codeforces}`,
      label: 'Codeforces',
    },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-12 md:pb-16 relative overflow-hidden"
    >
      {/* Animated background elements with premium glow effects */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl opacity-40 -z-10"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl opacity-35 -z-10"
        animate={{ y: [0, -30, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl opacity-30 -z-10"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Profile Image Section */}
        {portfolioData.personal.profileImage && (
          <motion.div
            variants={itemVariants}
            className="mb-12 md:mb-16 flex justify-center px-4 py-2 relative z-10 overflow-visible"
          >
            <div className="relative">
              <img
                src={portfolioData.personal.profileImage}
                alt={portfolioData.personal.name}
                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover dark:border-4 dark:border-indigo-500/60 border-4 border-indigo-300 shadow-2xl dark:shadow-indigo-600/40 hover:dark:shadow-indigo-500/60 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-full dark:bg-gradient-to-br dark:from-indigo-500/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>
        )}

        <div className="text-center">
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 md:mb-10 inline-block"
          >
          <div className="px-5 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300 dark:bg-gradient-to-r dark:from-indigo-950/80 dark:to-slate-900/60 dark:border dark:border-indigo-600/50 dark:hover:border-cyan-400/70 dark:hover:shadow-lg dark:hover:shadow-cyan-500/10 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 bg-white/90 border border-indigo-100 shadow-lg hover:shadow-indigo-300/30">
            <p className="text-xs font-bold dark:text-indigo-200 text-indigo-700 uppercase tracking-widest letter-spacing">
              {portfolioData.hero.status}
            </p>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black dark:bg-gradient-to-r dark:from-slate-100 dark:via-indigo-200 dark:to-slate-100 dark:bg-clip-text dark:text-transparent dark:drop-shadow-xl bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 bg-clip-text text-transparent mb-6 md:mb-8 leading-tight tracking-tight"
        >
          {portfolioData.hero.headline}
        </motion.h1>

        {/* Subheading */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <p className="text-lg md:text-2xl dark:text-slate-300 font-normal leading-relaxed text-slate-700 mb-3 font-semibold">
            {portfolioData.hero.subheading}
          </p>
          <p className="text-base md:text-lg dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium font-medium">
            {portfolioData.hero.description}
          </p>
        </motion.div>

        {/* Statement */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl dark:text-slate-300 font-normal leading-relaxed text-slate-700 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
        >
          {portfolioData.hero.statement}
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-400 ease-in-out flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/40 dark:hover:shadow-2xl dark:hover:shadow-indigo-500/50 dark:hover:from-indigo-500 dark:hover:to-purple-500 dark:hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-400/40 active:scale-95"
          >
            View Projects
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 font-semibold rounded-lg transition-all duration-400 ease-in-out border dark:bg-slate-900/80 dark:backdrop-blur-xl dark:text-slate-100 dark:border-slate-800/70 dark:hover:bg-slate-800/90 dark:hover:border-cyan-400/60 dark:hover:shadow-2xl dark:hover:shadow-indigo-500/15 dark:hover:-translate-y-1 transition-all duration-300 dark:hover:-translate-y-1 bg-slate-300 text-slate-900 hover:bg-slate-400 border-slate-400 hover:border-slate-500 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Resume Button */}
        <motion.div variants={itemVariants} className="mb-12">
          <a
            href={portfolioData.personal.resumePath}
            download="Kamrun_Nahar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 rounded-lg transition-all duration-400 ease-in-out text-sm font-semibold dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70 dark:text-slate-300 font-normal leading-relaxed dark:hover:border-indigo-500/60 dark:hover:bg-slate-800/80 dark:hover:shadow-lg dark:hover:shadow-indigo-500/15 dark:hover:-translate-y-0.5 bg-slate-300 border border-slate-400 text-slate-900 hover:text-indigo-700 hover:border-indigo-400 hover:shadow-indigo-300/20 hover:shadow-md active:scale-95"
          >
            📄 Download Resume
          </a>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          variants={itemVariants}
          className="mb-12 md:mb-16"
        >
          <StatsCounter />
        </motion.div>

        {/* Social Links & Scroll Indicator Container */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-8 mt-8"
        >
          {/* Social Links Row */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl transition-all duration-300 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-indigo-300 dark:hover:bg-slate-800/90 dark:hover:border-indigo-600/50 dark:border-slate-800/70/60 dark:hover:shadow-lg dark:hover:shadow-indigo-600/20 border border-indigo-200 bg-white/80 backdrop-blur-sm shadow-md text-indigo-700 hover:text-indigo-900 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-300/30 active:scale-90"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center gap-3 text-sm py-4 dark:text-slate-300 text-slate-800"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest font-semibold dark:text-slate-300">Scroll to explore</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
