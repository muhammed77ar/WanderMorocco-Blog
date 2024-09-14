export default function Features() {
    return (
        <>
            <section className="bg-white my-16 mx-10">
                <div className="container py-10 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 className=" text-gray-800  text-4xl font-medium">Share Your Journey with<br /><span className="text-[#d67940]">WanderMorocco</span></h1>

                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 bg-[#d67940] rounded-full"></span>
                                    <span className="inline-block w-3 h-1 ml-1 bg-[#d67940] rounded-full"></span>
                                    <span className="inline-block w-1 h-1 ml-1 bg-[#d67940] rounded-full"></span>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-[#c56d36] bg-[#fcb98f] rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M16 8a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>

                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize">Connect with Fellow Travelers:</h1>

                                    <p className="mt-3 text-gray-500">
                                        Share stories, tips, and experiences with a community that loves exploring Morocco as much as you do.
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-[#c56d36] bg-[#fcb98f] rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize">Exclusive Content</h1>

                                    <p className="mt-3 text-gray-500">
                                        Access member-only articles, guides, and resources to enhance your travel experience.
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-[#c56d36] bg-[#fcb98f] rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3a7 7 0 00-7 7c0 2.005.755 3.825 2 5.243V17h10v-1.757A7.002 7.002 0 0012 3zM12 17v5m-3-1h6" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize">Inspire Others</h1>

                                    <p className="mt-3 text-gray-500">
                                        Help fellow travelers discover hidden gems and unique destinations through your shared experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="../images/image_processing20191031-4-1ep1k9s.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
