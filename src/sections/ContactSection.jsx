import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Code2, Send, ArrowRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import CopyEmailButton from '../components/CopyEmailButton'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('idle') // idle, loading, success, error

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: portfolioData.personal.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: portfolioData.personal.linkedin,
    },
    {
      icon: Code2,
      label: 'Codeforces',
      href: `https://codeforces.com/profile/${portfolioData.personal.codeforces}`,
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('loading')

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setFormStatus('idle')
      }, 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <span className="text-sm font-display font-bold text-indigo-600 uppercase tracking-wider">
              Get in Touch
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-4">
            {portfolioData.contact.heading}
          </h2>
          <p className="text-xl md:text-2xl dark:text-slate-300 text-slate-700 mb-6">
            {portfolioData.contact.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <motion.div
            className="p-8 md:p-10 rounded-xl border transition-all dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-400/60 dark:hover:shadow-xl dark:hover:shadow-indigo-600/20 bg-white/80 backdrop-blur-md border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/15"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold dark:text-slate-300 text-slate-800 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all dark:bg-slate-900/80 dark:border-indigo-500/40 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/50 dark:focus:ring-1 bg-white border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold dark:text-slate-300 text-slate-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all dark:bg-slate-900/80 dark:border-indigo-500/40 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/50 dark:focus:ring-1 bg-white border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold dark:text-slate-300 text-slate-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg transition-all dark:bg-slate-900/80 dark:border-indigo-500/40 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/50 dark:focus:ring-1 resize-none bg-white border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/50"
                  placeholder="Tell me about your opportunity, idea, or project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accentDark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {formStatus === 'idle' && (
                  <>
                    <span>{portfolioData.contact.cta}</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {formStatus === 'loading' && (
                  <>
                    <span>Sending...</span>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <span>✓ Message Sent!</span>
                  </>
                )}
              </button>

              {/* Alternative Contact Note */}
              <p className="text-xs dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium font-medium text-center pt-2">
                Or reach out directly on any of the platforms below
              </p>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Social Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold dark:text-white font-bold tracking-wider letter-spacing-wide text-slate-900 mb-6">
                Connect With Me
              </h3>

              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border transition-all dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 transition-all duration-400 ease-in-out dark:hover:-translate-x-1 bg-white/80 backdrop-blur-md border-indigo-100 shadow-lg hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 duration-300"
                  whileHover={{ x: 8 }}
                >
                  <div className="p-3 rounded-lg dark:bg-indigo-950/60 dark:group-hover:bg-indigo-900/80 bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                    <social.icon className="dark:text-slate-300 dark:group-hover:text-indigo-200 text-indigo-600 group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold dark:text-white dark:group-hover:text-indigo-300 text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {social.label}
                    </p>
                    <p className="text-xs dark:text-slate-300 font-normal leading-relaxed text-slate-700 font-medium font-medium font-medium">Get in touch here</p>
                  </div>
                  <ArrowRight size={18} className="dark:text-slate-300 dark:group-hover:text-indigo-300 transition-all text-slate-600 group-hover:text-indigo-700 opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            {/* Quick Response Time */}
            <motion.div
              className="p-6 rounded-lg transition-all dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70/80 dark:hover:border-indigo-500/40 dark:hover:shadow-xl dark:hover:shadow-indigo-500/15 bg-blue-50 border border-blue-200 duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm dark:text-white text-slate-800 mb-2 font-semibold">
                <span className="dark:text-slate-300">💬 Response Time</span>
              </p>
              <p className="dark:text-slate-300 font-normal text-slate-700 leading-relaxed">
                I typically respond to messages within 24 hours. Let me know how I can help!
              </p>
            </motion.div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <CopyEmailButton email={portfolioData.personal.email} />
              <a
                href={portfolioData.personal.resumePath}
                download="Kamrun_Nahar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all font-semibold w-full justify-center dark:bg-indigo-600/80 dark:border-indigo-500/60 dark:text-white dark:hover:bg-indigo-600 dark:hover:border-indigo-400/80 dark:hover:shadow-lg dark:hover:shadow-indigo-500/20 bg-indigo-600 border border-indigo-700 text-white hover:bg-indigo-700 hover:border-indigo-800 hover:scale-105 active:scale-95 duration-300"
              >
                📄 Download Resume
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
