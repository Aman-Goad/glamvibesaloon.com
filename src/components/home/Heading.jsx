import React, { useMemo } from 'react'

const Heading = () => {
    const images = useMemo(() => [
        "/images/client1.jpg",
        "/images/client2.jpg",
        "/images/client3.jpg",
    ], [])

    return (
        <div className='w-full sm:h-screen flex flex-col justify-center items-center sm:mt-16 mt-[8vh]'>
            <h1 className='sm:text-[3vw] text-[5vh] text-center tracking-tight font-bold uppercase bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text'>
                GlamVibe Saloon Debuts with a Star-Studded Lineup of Icons
            </h1>

            <div className="flex flex-col sm:flex-row justify-evenly gap-4 sm:gap-0 px-4 sm:px-0  mt-12 w-full">
                {images.map((image, index) => (
                    <img 
                        key={image}
                        src={image} 
                        alt={`Icon ${index + 1}`} 
                        loading='lazy' 
                        className="w-full sm:w-[30%] h-[65vh] object-cover object-top rounded-lg sm:rounded-none" 
                    /> 
                ))}
            </div>
        </div>
    )
}

export default Heading
