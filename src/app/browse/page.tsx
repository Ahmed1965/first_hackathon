import React from "react";
import Image from "next/image";

const Brows = () => {
  return (
    <>
      {/* Browse The Range Section */}
      <section className="py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800">
            Browse The Range
          </h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: "/dining.png", label: "Dining" },
            { img: "/living.png", label: "Living" },
            { img: "/bedroom.png", label: "Bedroom" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={item.img}
                alt={item.label}
                width={300}
                height={200}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-gray-800 font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800">
            Our Products
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: "/product1.png",
              name: "Syltherine",
              description: "Stylish cafe chair",
              price: "Rp 2.500.000",
              oldPrice: "Rp 3.500.000",
            },
            {
              img: "/product2.png",
              name: "Respira",
              description: "Outdoor bar table and stool",
              price: "Rp 3.200.000",
            },
            {
              img: "/image 9.png",
              name: "Grifo",
              description: "Night lamp",
              price: "Rp 1.500.000",
            },
            {
              img: "/image7.png",
              name: "Muggo",
              description: "Small mug",
              price: "Rp 150.000",
            },
            {
              img: "/product7.png",
              name: "Pingky",
              description: "Cute bed set",
              price: "Rp 7.000.000",
              oldPrice: "Rp 14.000.000",
            },
            {
              img:"/lolito.png",
              name: "Lolito",
              description: "luxury big sale",
              price: "Rp 7.000.000",
              oldPrice: "Rp 14.000.000",

            },
          ].map((product, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500 mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.oldPrice}
                    </span>
                    
                    
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" py-4  text-yellow-700 flex justify-center items-center ">
          <button className="border-zinc-300 rounded-md shadow-ms items-center">Show More</button>
        </div>
      </section>

      {/* beautiful rooms section */}
      <section className="py-4 h-auto w-full bg-amber-100">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16">
    {/* Left Section: Image */}
    

    
  </div>

  {/* Image Grid */}
  <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { img: "/beautifulroom.png", label: "Inner Peace" },
      { img: "/beautifulroom2.png", label: "Modern Simplicity" },
    ].map((item, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-lg shadow-md"
      >
        <Image
          src={item.img}
          alt={item.label}
          width={300}
          height={200}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-gray-800 font-semibold">
          {item.label}
        </p>
      </div>
    ))}
    

    
  </div>
  {/* Right Section: Text */}
  <div className="flex-1 text-center lg:text-left">
      <h1 className="text-4xl lg:text-5xl font-poppins font-semibold leading-snug text-gray-800 mb-6">
        50+ Beautiful Rooms <br /> Inspiration
      </h1>
      <p className="text-gray-600 text-lg">
      Our designer already made a lot of beautiful prototipe of rooms that inspire you
      </p>
    </div>
</section>
{/* #FuniroFurniture section */}
<section className="py-6 items-center text-gray-500 ">
  <div className=" container font-poppins font-semiblod text-3xl sm:1xl md:2xl lg:3xl leading-6 text-center">
    <p className="">Share your setup with</p>
    <p className="font-poppins font-bold text-5xl sm:2xl md:3xl lg:5xl ">#FuniroFurniture</p>
  </div>
  {/* image section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: "/funiro1.png", label: "" },
            { img: "/funiro2.png", label: "" },
            { img: "/funiro3.png", label: "" },
            { img: "/funiro4.png", label: "" },
            { img: "/funiro5.png", label: "" },
            { img: "/funiro6.png", label: "" },
            { img: "/funiro7.png", label: "" },
            { img: "/funiro8.png", label: "" },
            { img: "/funiro9.png", label: "" },

          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={item.img}
                alt={item.label}
                width={300}
                height={200}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-md text-gray-800 font-semibold">
                {item.label}
              </p>
            </div>
          ))}
          </div>

  
     
    
    




</section>




</>
  )
}
export default Brows;
