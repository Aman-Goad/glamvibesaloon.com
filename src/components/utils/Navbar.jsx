import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#navbar-multi-level') && !event.target.closest('button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { to: "/", text: "Home", current: location.pathname === "/" },
    { to: "/services", text: "Services", current: location.pathname === "/services" },
    { to: "/contact", text: "Contact", current: location.pathname === "/contact" },
  ]

  return (
    <nav className="bg-transparent backdrop-blur-sm fixed w-full top-0 z-50 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          <img src="/images/glamvibe.svg" alt="GlamVibes Saloon" className="sm:w-[10vw] sm:h-[10vh] w-[30vw] h-[7vh] object-cover pt-4" />
        </Link>
        
        <button 
          onClick={toggleMenu} 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 text-[#8A2BE2] justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" 
          aria-controls="navbar-multi-level" 
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#8A2BE2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
        
        <div className={`
          fixed top-0 right-0 h-full w-full md:w-auto md:bg-transparent
          transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-300 ease-in-out
          md:relative md:transform-none md:transition-none
          md:block bg-white
        `} id="navbar-multi-level">
          <button 
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-custom-secondary hover:text-custom-primary md:hidden"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-16 md:mt-0 md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse bg-white md:bg-transparent h-screen md:h-auto">
            {navLinks.map((link, index) => (
              <li key={index} className="md:flex md:items-center">
                <Link 
                  to={link.to} 
                  className={`block py-2 px-3 text-base ${link.current ? 'text-custom-accent' : 'text-custom-secondary hover:text-custom-primary'} rounded md:bg-transparent md:p-0 transition duration-300`}
                  aria-current={link.current ? "page" : undefined}
                  onClick={handleLinkClick}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="md:flex md:items-center">
              <Link 
                to="/bookanappointment" 
                className="block py-2 px-4 text-base text-white bg-custom-primary hover:bg-custom-secondary rounded-md transition duration-300 text-center md:whitespace-nowrap"
                onClick={handleLinkClick}
              >
                Book an Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
