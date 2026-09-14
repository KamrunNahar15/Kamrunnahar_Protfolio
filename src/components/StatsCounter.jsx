import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const StatsCounter = () => {
  const stats = [
    { label: 'Projects Completed', value: 10, suffix: '+' },
    { label: 'Client Projects', value: 3, suffix: '' },
    { label: 'Problems Solved', value: 115, suffix: '+' },
    { label: 'Achievements', value: 6, suffix: '' },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const durations = [800, 600, 1000, 500]
    const intervals = stats.map((stat, idx) => {
      const increment = stat.value / (durations[idx] / 50)
      let current = 0
      return setInterval(() => {
        current += increment
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[idx] = Math.min(Math.floor(current), stat.value)
          return newCounts
        })
      }, 50)
    })

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="text-center p-4 rounded-xl dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border dark:border-slate-800/70 dark:hover:border-indigo-500/40 dark:hover:shadow-2xl dark:hover:shadow-indigo-500/20 dark:hover:border-indigo-400/60 transition-all duration-400 ease-in-out hover:-translate-y-0.5 bg-white/80 backdrop-blur-md border border-indigo-200 hover:border-indigo-400 shadow-lg"
        >
          <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            {counts[idx]}{stat.suffix}
          </div>
          <p className="dark:text-slate-300 text-slate-700 text-sm md:text-base font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsCounter
