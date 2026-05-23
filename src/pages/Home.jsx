import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
// import Skills from '../components/skills'
import Skills from '../components/Skills'

import Projects from "../components/Projects"
import Work from '../components/Work'
import Contact from '../components/Contact'

export const Home = () => {
  return (
    <div className="bg-[#0B0B0E]">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Work/>
      <Contact/>
    </div>
  )
}
