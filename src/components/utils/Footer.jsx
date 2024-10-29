import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className="bg-custom-primary text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">GlamVibe Saloon</h2>
              <p className="text-gray-200">Your premier destination for cutting-edge hair styling and beauty treatments.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-200 hover:text-custom-accent transition duration-300">Home</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-custom-accent transition duration-300">Services</Link></li>
                <li><Link to="/bookanappointment" className="text-gray-200 hover:text-custom-accent transition duration-300">Book Appointment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-200">
                <li><a href="https://maps.app.goo.gl/akTzqzc6NwfAhqds6" target="_blank" rel="noopener noreferrer" className="hover:text-custom-accent transition duration-300">Shop No. 913, Near Milan Restaurant</a></li>
                <li><a href="https://maps.app.goo.gl/akTzqzc6NwfAhqds6" target="_blank" rel="noopener noreferrer" className="hover:text-custom-accent transition duration-300">Sector 10, Faridabad</a></li>
                <li><a href="https://wa.me/919315005234" target="_blank" className="hover:text-custom-accent transition duration-300">Phone: 9315005234</a>, <a href="https://wa.me/918368509568" target="_blank" className="hover:text-custom-accent transition duration-300">8368509568</a></li>
                <li><a href="mailto:glamevibesaloon@gmail.com" className="hover:text-custom-accent transition duration-300">Email: glamevibesaloon@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4 text-[2vh] sm:text-[1.5vw]">
                <Link to="https://www.facebook.com/people/Glam-vibe-unisex-Saloon/61550987697739/?mibextid=LQQJ4d" target='_blank' className="text-gray-200 hover:text-custom-accent transition duration-300">    
                  <FaFacebookF />
                </Link>
                <Link to="https://www.instagram.com/glam_vibe_01" target='_blank' className="text-gray-200 hover:text-custom-accent transition duration-300">
                  <FaInstagram />
                </Link>
                <Link to="#" target='_blank' className="text-gray-200 hover:text-custom-accent transition duration-300">
                  <FaTwitter />
                </Link>
                <Link to="#" target='_blank' className="text-gray-200 hover:text-custom-accent transition duration-300">
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-10 pt-8 text-center text-gray-200">
            <p>&copy; 2024 GlamVibe Saloon. All rights reserved. | Website Design & Development by <a href="https://www.greatertechhub.com" target='_blank' className="text-custom-accent hover:text-custom-accent transition duration-300 font-bold border-b-2 border-custom-accent">GreaterTechHub</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
