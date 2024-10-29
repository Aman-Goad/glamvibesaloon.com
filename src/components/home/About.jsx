import React from 'react'

const About = () => {
  return (
    <div>
      <div className="flex flex-col-reverse mt-10 sm:mt-0 sm:flex-row items-start justify-between p-4 sm:px-16  max-w-screen-xl mx-auto gap-8 pb-24">
        <div className="w-full h-[55vh] md:w-1/2 mb-8 md:mb-0">
          <img src="/images/about.jpg" alt="About GlamVibe Saloon" loading='lazy' className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="sm:text-[3vw] text-[4vh] font-bold mb-4 text-custom-primary">About GlamVibe Saloon</h2>
          <p className="text-gray-700 mt-8 mb-2 ">
            GlamVibe Saloon is your premier destination for cutting-edge hair styling and beauty treatments. Our team of expert stylists is dedicated to helping you look and feel your best. With a focus on personalized service and the latest trends, we're here to elevate your style and boost your confidence.
          </p>
          <p className="text-gray-700 mb-2 ">
            At GlamVibe, we believe that beauty is an art form. Our Saloon combines luxurious ambiance with state-of-the-art techniques to provide an unparalleled experience. From precision haircuts to vibrant coloring, and from rejuvenating facials to glamorous makeup applications, we offer a comprehensive range of services to cater to all your beauty needs.
          </p>
         
          <button className="bg-custom-secondary mt-6 hover:bg-custom-primary text-white font-bold py-2 px-4 rounded transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
