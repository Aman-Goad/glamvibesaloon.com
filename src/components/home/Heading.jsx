import React, { useMemo } from 'react'

const Heading = () => {
    const images = useMemo(() => [
        "/images/client1.jpg",
        "/images/client2.jpg",
        "/images/client3.jpg",
    ], [])

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center mt-16'>
            <h1 className='text-[3vw] tracking-tight font-bold uppercase'>GlamVibe Salon Debuts with a Star-Studded Lineup of Icons</h1>

            <div className="flex justify-evenly mt-12 w-full">
                {images.map((image, index) => (
                    <img 
                        key={image}
                        src={image} 
                        alt={`Icon ${index + 1}`} 
                        loading='lazy' 
                        className="w-[30%] h-[65vh] object-cover object-top" 
                    /> 
                ))}
            </div>
        </div>
    )
}

export default Heading
