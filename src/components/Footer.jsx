import React from 'react'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
    {
      icon: Mail,
      href: `mailto:${portfolioData.personal.email === '[PROFESSIONAL EMAIL]' ? 'hello@example.com' : portfolioData.personal.email}`,
      label: 'Email',
    },
  ]

  return (
    <footer className="relative transition-colors duration-300 dark:border-t dark:border-indigo-500/20 dark:bg-gradient-to-b dark:from-slate-950 dark:to-black border-t border-slate-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-2 dark:text-white text-slate-900">
              {portfolioData.personal.name}
            </h3>
            <p className="dark:text-slate-300 text-slate-700">{portfolioData.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-wider mb-4 dark:text-slate-300 text-slate-800">
              Navigation
            </h4>
            <nav className="space-y-2">
              {[
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Achievements', href: '#achievements' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors text-sm dark:text-slate-300 dark:hover:text-indigo-600 text-slate-800 hover:text-indigo-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-wider mb-4 dark:text-slate-300 text-slate-800">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all duration-300 dark:bg-slate-900/60 dark:border dark:border-indigo-500/40 dark:text-slate-300 dark:hover:border-indigo-400/60 dark:hover:bg-indigo-600/20 dark:hover:text-indigo-200 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 bg-slate-200 hover:bg-slate-100 text-slate-800 hover:text-indigo-700"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-8 dark:border-t dark:border-indigo-500/20 border-t border-slate-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm dark:text-slate-300 text-slate-700">
            <p>{portfolioData.footer.copyright}</p>
            <p className="text-xs">
              Designed & Built with React • Deployed with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
