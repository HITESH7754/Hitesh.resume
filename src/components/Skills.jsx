import React from 'react'
import { motion } from 'framer-motion'
import { skills as skillsData } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 min-h-screen bg-gradient-to-br from-[#0B0B0E] via-[#111827] to-[#0B0B0E]"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          My Skill
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 transition duration-300 hover:scale-105"
            >
              {/* Skill Icon */}
              <skill.icon className="text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400" />

              {/* Skill Title */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {skill.title}
              </h3>

              {/* Skill Description */}
              <p className="text-gray-400 text-sm mb-4">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-dark-400 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
