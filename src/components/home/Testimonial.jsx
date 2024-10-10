import React from 'react'

const Testimonial = () => {
  return (
    <div>
      <h1 className='text-[4vw] text-black text-center font-bold py-6'>Our <span className='text-custom-primary'>Testimonial</span></h1>

      <div className='flex justify-center items-center aspect-video pb-20'>
        <video src="/videos/hero.mp4" autoPlay loop muted className='w-[80%] h-[80vh] object-cover' />
      </div>
    </div>
  )
}

export default Testimonial
