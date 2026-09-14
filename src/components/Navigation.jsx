import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun, FileText } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Navigation = ({ isVisible, theme, onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Client Work', href: '#client-work' },
    { label: 'CP', href: '#competitive-programming' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Experience', href: '#experience' },
    { label: 'Activities', href: '#activities' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-slate-950/95 border-slate-800'
          : 'bg-white/95 border-slate-200'
      } border-b backdrop-blur-xl`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className={`text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-accent to-accentLight bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
          >
            KS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-slate-300 hover:text-indigo-600 hover:bg-accent/5'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-accent/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            <a
              href={portfolioData.personal.resumePath}
              download="Kamrun_Nahar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                theme === 'dark'
                  ? 'bg-accent/10 text-indigo-600 hover:bg-accent/20'
                  : 'bg-accent/10 text-indigo-600 hover:bg-accent/20'
              }`}
            >
              <FileText size={16} />
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div
            className={`border-t ${
              theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
            } py-4 space-y-1`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  theme === 'dark'
                    ? 'text-slate-300 hover:text-indigo-600 hover:bg-accent/5'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-accent/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={portfolioData.personal.resumePath}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                theme === 'dark'
                  ? 'text-indigo-600 bg-accent/10 hover:bg-accent/20'
                  : 'text-indigo-600 bg-accent/10 hover:bg-accent/20'
              }`}
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
