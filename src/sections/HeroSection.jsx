import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Code2, ExternalLink, FileText } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import TypingEffect from '../components/TypingEffect'
import AnimatedCounter from '../components/AnimatedCounter'

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const socialLinks = [
    {
      icon: Github,
      href: portfolioData.personal.github,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: portfolioData.personal.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Code2,
      href: `https://codeforces.com/profile/${portfolioData.personal.codeforces}`,
      label: 'Codeforces',
    },
  ]

  return (
    <section id="home" className="section pt-32 md:pt-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-dark-surface dark:border dark:border-dark-border dark:hover:border-accent/50 transition-all">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono dark:text-dark-muted uppercase tracking-widest">
                {portfolioData.hero.status}
              </span>
            </div>
          </motion.div>

          {/* Profile Picture */}
          {portfolioData.personal.profileImage && (
            <motion.div
              variants={itemVariants}
              className="mb-12 flex justify-center"
            >
              <div className="relative">
                {/* Animated glow background */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-2xl opacity-30 -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(34, 211, 238, 0.2) 100%)',
                  }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Gradient ring border */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-0.5 bg-gradient-to-r from-accent via-accent-violet to-accent-cyan">
                  {/* Inner container for glassmorphism */}
                  <div className="w-full h-full rounded-full dark:bg-dark-surface/40 dark:backdrop-blur-sm flex items-center justify-center p-1 border border-accent-cyan/20">
                    {/* Profile image with floating animation */}
                    <motion.img
                      src={portfolioData.personal.profileImage}
                      alt={portfolioData.personal.name}
                      className="w-full h-full rounded-full object-cover shadow-xl dark:shadow-accent/30"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{
                        boxShadow: '0 0 30px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)',
                      }}
                    />

                    {/* Floating animation wrapper */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Headline - Gradient Text */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">
              {portfolioData.hero.headline}
            </span>
          </motion.h1>

          {/* Typing Effect Role */}
          <motion.div variants={itemVariants} className="mb-8 h-12 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-display dark:text-dark-muted">
              <TypingEffect
                words={['Competitive Programmer', 'Software Developer', 'Problem Solver']}
                speed={80}
                delayBetweenWords={2000}
              />
            </span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl dark:text-dark-muted max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {portfolioData.hero.description}
          </motion.p>

          {/* Statement */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg dark:text-dark-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {portfolioData.hero.statement}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold dark:text-accent-cyan mb-1">
                <AnimatedCounter from={0} to={200} duration={2000} suffix="+" />
              </div>
              <p className="text-xs font-mono dark:text-dark-muted uppercase tracking-wider">Problems Solved</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold dark:text-accent-emerald mb-1">
                2+
              </div>
              <p className="text-xs font-mono dark:text-dark-muted uppercase tracking-wider">Internships</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold dark:text-accent mb-1">
                <AnimatedCounter from={0} to={10} duration={2000} suffix="+" />
              </div>
              <p className="text-xs font-mono dark:text-dark-muted uppercase tracking-wider">Projects</p>
            </div>
            <div className="hidden md:block text-center">
              <div className="text-2xl md:text-3xl font-display font-bold dark:text-accent-amber mb-1">
                5
              </div>
              <p className="text-xs font-mono dark:text-dark-muted uppercase tracking-wider">Achievements</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="group px-8 py-3.5 rounded-lg bg-gradient-to-r from-accent via-accent-violet to-accent-magenta text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-1"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={portfolioData.personal.resumePath}
              download="Kamrun_Nahar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3.5 rounded-lg dark:bg-dark-surface dark:border dark:border-dark-border dark:text-dark-text dark:hover:bg-dark-surface-hover dark:hover:border-accent/50 font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <FileText size={18} />
              Resume
              <ExternalLink size={18} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mb-16"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg dark:bg-dark-surface dark:border dark:border-dark-border dark:text-dark-text dark:hover:text-accent-cyan dark:hover:bg-dark-surface-hover dark:hover:border-accent/50 transition-all duration-300 group"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 dark:text-dark-muted"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll to explore</span>
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
    </section>
  )
}

export default HeroSection
