import React from 'react'
import Heading from './Heading'
import About from './About'
import Others from './Others'
import LocomotiveScroll from 'locomotive-scroll';
import Appointment from '../utils/Appointment';

const Home = () => {

// const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen'>
      <div className='h-screen w-full  '>
        <video className='object-cover h-full w-full'  src="/videos/hero.mp4" autoPlay loop muted />
        <div className='absolute inset-0 bg-black opacity-40'></div>
      </div>

      <Heading />

      <About />

      <Others />
      <Appointment />
    </div>
  )
}

export default Home
