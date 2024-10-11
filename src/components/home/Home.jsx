import React, { useEffect } from 'react'
import Heading from './Heading'
import About from './About'
import Others from './Others'
import Lenis from 'lenis'
import Appointment from '../utils/Appointment';

const Home = () => {
  useEffect(() => {
    document.title = 'GlamVibeSalon | Home';
    // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  }, []); // Update document title and scroll to top on page load

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scroll to top when pathname changes

  return (
    <div className='w-full min-h-screen'>
      <div className='sm:h-screen h-[100vh] aspect-video w-full  relative flex items-center justify-center'>
        <video className='absolute object-cover h-full w-full z-[-1]'  src="/videos/hero.webm" autoPlay loop muted />
        <div className='absolute inset-0 bg-black opacity-40'></div>
        <h1 className='title z-10 sm:text-[10vw] text-[7vh] flex-wrap  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>GlamVibeSalon</h1>
      </div>

<div>



      <Heading />

      <About />

      <Others />
      <Appointment />
      </div>
    </div>
  )
}

export default Home
