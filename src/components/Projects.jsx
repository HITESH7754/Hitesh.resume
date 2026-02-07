
import React from 'react'
import { motion } from 'framer-motion'
import projectResume from '../assets/image1.jpeg'
import projectyt from "../assets/image2.jpeg"
import projectAI from "../assets/image3.jpeg"

const projects = [
  {
    title: "YouTube Clone",
    description: "A YouTube clone with video listing and responsive UI.",
    image: projectyt,
    tech: ["React", "Tailwind", "API"],
    demo: "https://youtube-clone-gold-seven.vercel.app/",
    code: "https://github.com/uday2004-dev/youtube-clone",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animations and smooth scrolling.",
    image: projectResume,
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "#",
    code: "#",
  },
  {
    title: "AI ChatBot",
    description: "AI ChatBot powered by Gemini",
    image: projectAI,
    tech: ["React", "Tailwind", "API", "React-Icons"],
    demo: "https://aichatbot-two-flame.vercel.app/",
    code: "https://github.com/uday2004-dev/aichatbot",
  }
]

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 min-h-screen bg-gradient-to-br from-[#0B0B0E] via-[#111827] to-[#0B0B0E]"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          My Projects
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 bg-dark-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg font-medium text-white hover:opacity-90 transition"
                  >
                    View Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-blue-400 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg font-medium hover:bg-white/10 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
