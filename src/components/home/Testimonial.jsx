import React from 'react'

const Testimonial = () => {
  return (
    <div>
      <h1 className='sm:text-[4vw] text-[6vh] text-black text-center font-bold py-6'>Our <span className='text-custom-primary'>Testimonial</span></h1>

      <div className='flex justify-center items-center aspect-video pb-20 px-4 sm:px-0'>
        <video src="/videos/hero.mp4"  loop controls  className='sm:w-[80%] sm:h-[80vh] w-full h-[40vh] object-cover ' />
      </div>
    </div>
  )
}

export default Testimonial
