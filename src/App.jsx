import React, { useState, useEffect } from 'react'
import ModernNavigation from './components/ModernNavigation'
import AnimatedBackground from './components/AnimatedBackground'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import EducationSection from './sections/EducationSection'
import SkillsSection from './sections/SkillsSection'
import SplitProjectsSection from './sections/SplitProjectsSection'
import CompetitiveProgrammingSection from './sections/CompetitiveProgrammingSection'
import AchievementsSection from './sections/AchievementsSection'
import ExperienceSection from './sections/ExperienceSection'
import ActivitiesSection from './sections/ActivitiesSection'
import LearningJourneySection from './sections/LearningJourneySection'
import ProblemSolvingSection from './sections/ProblemSolvingSection'
import CurrentlyBuildingSection from './sections/CurrentlyBuildingSection'
import ResearchDirectionSection from './sections/ResearchDirectionSection'
import DeveloperDashboardSection from './sections/DeveloperDashboardSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'} relative w-screen overflow-x-hidden`}>
      <AnimatedBackground theme={theme} />
      <div className="relative z-10">
        <ModernNavigation
          isVisible={isNavVisible}
          theme={theme}
          onThemeToggle={toggleTheme}
        />

        <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <SplitProjectsSection />
        <CompetitiveProgrammingSection />
        <AchievementsSection />
        <ExperienceSection />
        <ActivitiesSection />
        <LearningJourneySection />
        <ProblemSolvingSection />
        <CurrentlyBuildingSection />
        <ResearchDirectionSection />
        <DeveloperDashboardSection />
        <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
