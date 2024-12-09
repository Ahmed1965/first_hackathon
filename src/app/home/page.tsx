import Image from "next/image";

const LandingPage = () => {
  return (
    <>
      <section className="w-full h-screen bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-5 py-10">
          {/* Image Section */}
          <figure className="flex-1 mb-10 lg:mb-0">
            <Image
              src="/scandinavian 1.png"
              alt="Scandinavian Fur - New Arrival"
              width={1440}
              height={1007}
              className="w-full h-auto object-cover rounded"
            />
          </figure>

          {/* Text Section */}
          <article className="flex-1 bg-amber-50 rounded-lg p-8 lg:p-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <h3 className="text-[16px] font-medium font-poppins mb-4 text-gray-900">
              New Arrival
            </h3>

            <h2 className="text-amber-400 font-bold text-[36px] md:text-[52px] leading-tight mb-6">
              Discover Our New Collection
            </h2>

            <p className="text-gray-800 font-medium text-[16px] md:text-[18px] leading-6 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>

            {/* Button Section */}
            <div>
              <button
                className="bg-amber-400 hover:bg-gray-200 text-white hover:text-black font-bold py-3 px-6 rounded-lg transition duration-300"
                aria-label="Buy now from the new collection"
              >
                BUY NOW
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
