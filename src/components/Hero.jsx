import React from 'react'

function Hero() {
  return (
    <div>
      <section  className=" py-8 md:py-12 lg:py-16">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        FIND <br /> ACCESSORIES <br /> FOR YOUR PHONE
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        Enter phone, tablet, or any wearable of your choice.
                    </p>
                    <div className="mt-6">
                        <button className=" mr-4 md:mr-6 bg-black text-white p-2 rounded">Shop Now</button>
                        <button className="bg-black text-white p-2 rounded">View More</button>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 md:w-1/2 md:ml-8">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fEvo85aUblpJh7jYyDeARgHaFx&pid=Api&P=0&h=220" alt="Laptop Pic" className="w-full" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
