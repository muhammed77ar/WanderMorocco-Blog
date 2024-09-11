import React from 'react'

export default function AboutSection() {
    return (
        <section className="py-10 relative mt-10">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div
                        className="w-full justify-center items-start lg:gap-6 sm:gap-6 grid sm:grid-cols-2 grid-cols-2 lg:order-first order-last">
                        <div className="lg:pt-10 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img className=" rounded-xl h-[400px] w-[90%] object-cover" src="../images/download (30).jpeg" alt="about Us image" />
                        </div>
                        <img className="sm:ml-0 ml-auto h-[400px] rounded-xl object-cover w-[90%]" src="../images/download (31).jpeg"
                            alt="about Us image" />
                    </div>
                    <div className="w-full h-full flex flex-col justify-start lg:items-start items-center gap-5">
                        <h2
                            className="text-gray-900 text-4xl font-bold  leading-normal lg:text-start text-center">
                            About Us</h2>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                            At WanderMorocco, we're dedicated to sharing the wonders of Morocco with fellow travelers. Our mission is to provide you with insider tips, inspiring stories, and practical advice to make your Moroccan adventure unforgettable. Explore our blog to discover hidden gems, vibrant cultures, and stunning landscapes that will make your journey truly special.
                        </p>
                        <button
                            className="sm:w-fit w-full px-3.5 py-2 bg-[#d67940] hover:bg-[#c26e3a] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                            <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
