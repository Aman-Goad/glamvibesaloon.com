import React from 'react'
import Marquee from 'react-fast-marquee';
import Testimonial from './Testimonial';

const Others = () => {
  const highlightsData = [
    {
      id: 1,
      image: "/images/bride.jpg",
      title: "Bridal Makeup",
      description: "Stunning looks for your special day. Our expert artists create timeless bridal beauty.",
    },
    {
      id: 2,
      image: "/images/party.jpg",
      title: "Party Makeup",
      description: "Glamorous styles to make you shine at any event. Stand out with our party-perfect looks.",
    },
    {
      id: 3,
      image: "/images/engagement.jpg",
      title: "Engagement Makeup",
      description: "Radiant makeup for your engagement. Celebrate your love with a beautiful, glowing appearance.",
    },
  ];
const partners = [
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/3-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/4-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/5-150x150.webp",
  },

  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/8-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/9-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/10-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/11-150x150.webp",
  },

  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/3-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/4-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/5-150x150.webp",
  },
  
 
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/8-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/9-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/10-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/11-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/4-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/5-150x150.webp",
  },
  
 
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/8-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/9-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/10-150x150.webp",
  },
  {
    image: "https://www.rawls.co.in/wp-content/uploads/2024/06/11-150x150.webp",
  },
  
]
  return (
    <div 
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/about.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}
    className="min-h-screen"
    >
      <div className='Highlights'>
        <h1 className='sm:text-[4vw] text-[6vh] text-white text-center font-bold py-6'>Our <span className='text-custom-primary'>Highlights</span></h1>

        <div className="flex flex-wrap justify-center gap-12 mt-12 px-8">
          {highlightsData.map((highlight) => (
            <div key={highlight.id} className="relative w-full sm:w-80 h-96 rounded-xl shadow-2xl overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{ backgroundImage: `url(${highlight.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-10 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-2xl font-bold mb-2">{highlight.title}</h2>
                <p className="text-sm leading-relaxed mb-4">{highlight.description}</p>
                <button className="bg-custom-secondary hover:bg-custom-primary text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="partners bg-white mt-16">
        <h1 className='sm:text-[4vw] text-[6vh] text-black text-center font-bold py-6'>Our <span className='text-custom-primary'>Partners</span></h1>

        <Marquee className="flex justify-center items-center py-8  max-w-7xl mx-auto" speed={130} gradient={true} >
          {partners.map((partner) => (
            <div className="mx-10">
              <img src={partner.image} alt={partner.title}  className="sm:h-36 h-24   w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </Marquee>

        <Testimonial />
      </div>
    </div>
  )
}

export default Others
