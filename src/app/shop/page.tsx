import React from 'react'
import Image from 'next/image'

const Shop = () => {
  return (
    <>
    {/* shop page most pics are repeated */}
    <section className="relative w-full h-screen min-h-9 bg-cover bg-center" style={{ backgroundImage: "url('/shopbanner.png')" }}>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for darkening the image */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Shop
    </h1>
    <p className="mt-4 text-sm md:text-xl max-w-2xl">
      Home > shop
    </p>
    
  </div>
  <p className="mt-2 text-sm md:text-xl max-w-2xl text-center bg-amber-100">
  <div className="">
    <Image src='/filter.png'
    alt='filter'
    width={50}
    height={50}
    className='items-center'
    />


  </div>
    

    

    
  </p>

</section>
    
    </>
    
  )
}

export default Shop