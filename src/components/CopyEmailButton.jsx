import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Check } from 'lucide-react'

const CopyEmailButton = ({ email }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error('Failed to copy email')
    }
  }

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-accent via-accentLight to-accent text-white font-semibold flex items-center gap-2 shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50 transition-all"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <Check size={18} />
            <span>Copied!</span>
          </motion.div>
        ) : (
          <motion.div
            key="mail"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <Mail size={18} />
            <span>Copy Email</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton
