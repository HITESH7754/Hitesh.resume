
import React from 'react'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div
      className="bg-dark-300 rounded-2xl overflow-hidden
        hover:-translate-y-2 transition duration-300 cursor-pointer"
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-4">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 bg-dark-400"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg font-medium text-white hover:opacity-90 transition duration-300"
          >
            View Demo
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 border border-blue-400 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg font-medium hover:bg-white/10 transition duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
