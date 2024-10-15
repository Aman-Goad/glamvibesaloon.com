import React from 'react'
import { motion } from 'framer-motion'
import Appointment from '../utils/Appointment';

const ServiceCategory = ({ title, services, index }) => {
  const backgroundImages = [
    'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80")',
    'url("https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80")',
    'url("https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
    'url("https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80")',
    'url("https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
  ];

  return (
    <motion.div 
      className="bg-black/70 rounded-lg shadow-md p-6 relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0" 
        style={{ backgroundImage: backgroundImages[index % backgroundImages.length] }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-zinc-100 mb-4">{title}</h2>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <motion.li 
              key={index} 
              className="text-white flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="w-2 h-2 mr-2 rounded-full bg-gradient-to-r from-red-400 to-purple-600"></span>
              {service}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const Service = () => {
  return (
    <>
    <div className='min-h-screen bg-gradient-to-b from-pink-600 to-purple-800 mt-20 w-full flex flex-col items-center justify-center p-8'>
      <motion.h1 
        className='text-4xl font-bold text-white mb-8'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ServiceCategory index={0} title="Facial" services={['LOTUS', 'GOLD', 'BLEACHING', 'CLEANUP', 'DIAMOND', 'FRUIT', 'ANTI TAN', 'ACNE', 'SENSITIVE', 'PIGMENTED SKIN GLOW']} />
        <ServiceCategory index={1} title="Bleach" services={['FULL BLEACH', 'FACE', 'HANDS', 'BACK', 'BELLY FRONT', 'FULL ARMS', 'FULL LEGS', 'FRUIT BLEACH']} />
        <ServiceCategory index={2} title="Clean-up" services={['LOTUS', 'GOLD', 'WHITENING', 'ACNE', 'FRUIT', 'DIAMOND', 'HERBAL', 'FRUIT']} />
        <ServiceCategory index={3} title="Face Wax" services={['CHIN', 'UPPER LIPS', 'SIDE LOCKS', 'FOREHEAD', 'NECK', 'CHEEKS', 'NOSE', 'FULL FACE']} />
        <ServiceCategory index={4} title="Normal Wax" services={['FULL ARMS', 'HALF ARMS', 'UNDER ARMS', 'FULL LEGS', 'HALF LEGS', 'BACK', 'BELLY', 'FULL BODY WAX']} />
        <ServiceCategory index={0} title="Rica Wax" services={['FULL ARMS', 'HALF ARMS', 'UNDER ARMS', 'FULL LEG', 'HALF LEG', 'BACK', 'BELLY', 'FULL BODY WAX']} />
        <ServiceCategory index={1} title="Full Body Work" services={['FULL BODY MASSAGE', 'BODY POLISHING']} />
        <ServiceCategory index={2} title="Hair Treatment" services={['HAIR SPA', 'HAIR PROTEIN', 'KERATIN', 'HAIR REBONDING', 'HAIR CUT', 'HAIR WASH']} />
        <ServiceCategory index={3} title="Hair Cutting" services={['ALL TYPES OF HAIR CUT', 'BEARD', 'BLOW DRYING']} />
      </motion.div>
    </div>
    <Appointment/>
    </>
  )
}

export default Service
