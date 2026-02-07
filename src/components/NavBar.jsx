import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"]

  return (
    <nav className="fixed w-full h-[80px] z-50 bg-dark-100/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto h-full px-8 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-white flex items-center gap-1">
          HIT
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">ESH</span>
          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mt-2" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/70 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 transition group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          {showMenu ? (
            <FaXmark className="text-2xl cursor-pointer" onClick={() => setShowMenu(false)} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={() => setShowMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-dark-300 h-screen px-6 pt-10 flex flex-col gap-6 text-center">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setShowMenu(false)}
              className="text-lg text-white/80 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default NavBar
