import React from 'react'
import { motion } from 'framer-motion'
import TypeWriter from './Typewriter'
import { assets } from '../assets/assets'
import resume from "../assets/resume.pdf"

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center pt-20 pb-16
        bg-gradient-to-br from-[#0B0B0E] via-[#111827] to-[#0B0B0E]"
      id="home"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-7xl font-semibold mb-4 text-white">
            Hi, I'm <br />
            <span className="text-blue-500">HITESH</span>
          </h1>

          <TypeWriter />

          <p className="text-lg text-gray-400 mb-8">
            I create stunning web experiences with modern technologies
            and innovative design.
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 rounded-lg font-medium
                hover:bg-blue-600 transition duration-300 text-white"
            >
              View work
            </a>

            <a
              href={resume}
              className="px-6 py-3 border border-blue-500 rounded-lg font-medium
                text-blue-400 hover:bg-blue-500/10 transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full
              bg-gradient-to-r from-blue-500/30 to-blue-400/10 blur-2xl">
            </div>

            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeOut"
              }}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80
                object-cover z-10"
              src={assets.profileImg}
              alt="Profile"
            />
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero
