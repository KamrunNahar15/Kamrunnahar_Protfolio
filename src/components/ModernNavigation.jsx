import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, FileText, Github, Linkedin, Home, User, Code, Zap, BookOpen } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const ModernNavigation = ({ isVisible, theme, onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Projects', href: '#projects', icon: Code },
    { label: 'Experience', href: '#experience', icon: Zap },
    { label: 'Learning', href: '#building', icon: BookOpen },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
      setActiveSection(href.substring(1))
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:py-4"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Floating Glassmorphic Nav Bar */}
        <div className="relative rounded-full backdrop-blur-xl px-6 md:px-8 py-3 md:py-4 shadow-lg transition-all duration-300 dark:bg-slate-900/60 dark:border-slate-800/70 dark:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 bg-white/90 border border-slate-300 shadow-slate-400/20 hover:shadow-slate-400/30">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <div className="text-lg md:text-xl font-display font-black">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                  KS
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 border ${
                      isActive
                        ? 'dark:text-slate-300 dark:bg-indigo-500/10 dark:border-indigo-500/40 text-indigo-700 bg-indigo-100 border-indigo-400'
                        : 'dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-indigo-500/5 dark:border-transparent text-slate-800 hover:text-indigo-700 hover:bg-slate-200 border-transparent'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                )
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* GitHub Link */}
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-200 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-300 dark:hover:text-indigo-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 dark:hover:shadow-lg dark:hover:shadow-indigo-500/15 bg-slate-200 border border-slate-300 text-slate-800 hover:text-indigo-700 hover:border-indigo-400 hover:bg-slate-100"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              {/* LinkedIn Link */}
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-200 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-300 dark:hover:text-indigo-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 dark:hover:shadow-lg dark:hover:shadow-indigo-500/15 bg-slate-200 border border-slate-300 text-slate-800 hover:text-indigo-700 hover:border-indigo-400 hover:bg-slate-100"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              {/* Resume Button */}
              <a
                href={portfolioData.personal.resumePath}
                download="Kamrun_Nahar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-semibold text-sm dark:bg-indigo-600/80 dark:border-indigo-500/60 dark:text-white dark:hover:bg-indigo-600 dark:hover:border-indigo-400/80 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 bg-indigo-600 border border-indigo-700 text-white hover:bg-indigo-700 hover:border-indigo-800"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={onThemeToggle}
                className="flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-200 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-300 dark:hover:text-indigo-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 dark:hover:shadow-lg dark:hover:shadow-indigo-500/15 bg-slate-200 border border-slate-300 text-slate-800 hover:text-indigo-700 hover:border-indigo-400 hover:bg-slate-100"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-200 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-300 dark:hover:text-indigo-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 dark:hover:shadow-lg dark:hover:shadow-indigo-500/15 bg-slate-200 border border-slate-300 text-slate-800 hover:text-indigo-700 hover:border-indigo-400 hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-4 pt-4 space-y-2 overflow-hidden dark:border-t dark:border-slate-800 border-t border-slate-400/50"
              >
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 border ${
                        isActive
                          ? 'dark:text-slate-300 dark:bg-indigo-500/10 dark:border-indigo-500/40 text-indigo-600 bg-indigo-100/60 border-indigo-400/40'
                          : 'dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-indigo-500/5 dark:border-transparent text-slate-700 hover:text-indigo-600 hover:bg-indigo-100/40 border-transparent'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  )
                })}

                {/* Mobile Social Links */}
                <div className="flex items-center gap-3 pt-4">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-300 dark:hover:text-indigo-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 dark:hover:shadow-lg dark:hover:shadow-indigo-500/15 bg-slate-200 border border-slate-300 text-slate-800 hover:text-indigo-700 hover:border-indigo-400 hover:bg-slate-100"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-300 dark:hover:text-indigo-300 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10 dark:hover:shadow-lg dark:hover:shadow-indigo-500/15 bg-slate-200 border border-slate-300 text-slate-800 hover:text-indigo-700 hover:border-indigo-400 hover:bg-slate-100"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>

                {/* Mobile Resume Button */}
                <a
                  href={portfolioData.personal.resumePath}
                  download="Kamrun_Nahar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 rounded-lg font-semibold text-sm transition-all duration-200 dark:bg-indigo-600/80 dark:border-indigo-500/60 dark:text-white dark:hover:bg-indigo-600 dark:hover:border-indigo-400/80 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 bg-indigo-600 border border-indigo-700 text-white hover:bg-indigo-700 hover:border-indigo-800"
                >
                  <FileText size={16} />
                  Download Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}

export default ModernNavigation
