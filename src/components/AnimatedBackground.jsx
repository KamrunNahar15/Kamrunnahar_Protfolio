import React, { useEffect, useRef } from 'react'

const AnimatedBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    // Theme-aware colors
    const isDark = theme === 'dark'
    const bgGradientStart = isDark ? 'rgba(15, 23, 42, 1)' : 'rgba(248, 250, 252, 1)'
    const bgGradientMid = isDark ? 'rgba(12, 20, 40, 1)' : 'rgba(241, 245, 249, 1)'
    const bgGradientEnd = isDark ? 'rgba(8, 12, 25, 1)' : 'rgba(226, 232, 240, 1)'
    const particleColor = isDark ? 'rgba(99, 102, 241, ' : 'rgba(79, 70, 229, '

    // Set canvas size to match actual viewport
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    let width = canvas.width
    let height = canvas.height

    // Particle system
    const particles = []
    const particleCount = 50

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 1.0
        this.vy = (Math.random() - 0.5) * 1.0
        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.15 + 0.08
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
      }

      draw(ctx, particleColor) {
        ctx.fillStyle = `${particleColor}${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Draw lines between nearby particles
    const drawConnections = (currentWidth, currentHeight, particleColor) => {
      const maxDistance = 150
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 0.2 * (1 - distance / maxDistance)
            ctx.strokeStyle = `${particleColor}${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw background gradient (theme-aware)
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, bgGradientStart)
      gradient.addColorStop(0.5, bgGradientMid)
      gradient.addColorStop(1, bgGradientEnd)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx, particleColor)
      })

      // Draw connections
      drawConnections(width, height, particleColor)

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
      width = canvas.width
      height = canvas.height
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        margin: 0,
        padding: 0,
        border: 'none',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}

export default AnimatedBackground
