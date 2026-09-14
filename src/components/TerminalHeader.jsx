import React from 'react'
import { motion } from 'framer-motion'

const TerminalHeader = ({ technologies, projectName }) => {
  return (
    <div className="relative w-full h-32 md:h-40 rounded-t-lg overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800">
      {/* Terminal Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
        <div className="flex gap-2">
          <motion.div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500" whileHover={{ scale: 1.2 }} />
          <motion.div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500" whileHover={{ scale: 1.2 }} />
          <motion.div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500" whileHover={{ scale: 1.2 }} />
        </div>
        <span className="text-xs text-slate-500 ml-2 font-mono">portfolio-{projectName?.toLowerCase().replace(/\s+/g, '-')}.jsx</span>
      </div>

      {/* Code Snippet */}
      <div className="p-4 font-mono text-xs md:text-sm leading-relaxed h-24 md:h-28 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="text-green-400/80">
            <span className="text-slate-400">{'// Tech Stack'}</span>
            <br />
            <span className="text-blue-400">{'const'}</span>
            <span className="text-slate-300">{' stack = ['}</span>
          </div>
          <div className="text-slate-400 ml-4 space-y-1 mt-2">
            {technologies.slice(0, 3).map((tech, i) => (
              <div key={i}>
                <span className="text-orange-400">"{tech}"</span>
                <span className="text-slate-500">{i < 2 ? ',' : ''}</span>
              </div>
            ))}
            {technologies.length > 3 && <div className="text-slate-500">...</div>}
          </div>
          <div className="text-slate-400">
            <span>{'  ]'}</span>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

export default TerminalHeader
