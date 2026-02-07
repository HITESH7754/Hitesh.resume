import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center pt-20 pb-16
        bg-gradient-to-br from-[#0B0B0E] via-[#111827] to-[#0B0B0E]"
      id="contact"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  className="w-full bg-dark-300 border border-dark-400
                    rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email address</label>
                <input
                  className="w-full bg-dark-300 border border-dark-400
                    rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  className="w-full h-40 bg-dark-300 border border-dark-400
                    rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 rounded-lg
                  font-medium text-white hover:bg-blue-600
                  transition duration-300"
              >
                Send
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-blue-500 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Location
                </h3>
                <p className="text-gray-400">
                  Vikas Puri, New Delhi – 110043
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-500 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Email
                </h3>
                <p className="text-gray-400">
                  hitesharora7754@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-blue-500 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Phone
                </h3>
                <p className="text-gray-400">
                  9650665145
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/HITESH7754"
                  className="w-12 h-12 rounded-full bg-dark-400
                    flex items-center justify-center text-white
                    hover:bg-blue-500 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:hitesharora7754@gmail.com"
                  className="w-12 h-12 rounded-full bg-dark-400
                    flex items-center justify-center text-white
                    hover:bg-blue-500 transition"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
