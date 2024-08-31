
export default function FeaturedDestinationsCard() {
	return (
		<div>
			<h1 className="text-4xl font-medium mx-10 mt-10">
				Featured Destinations
			</h1>
			<p className=" mx-10 text-gray-500">Explore the Must-See Wonders of Morocco</p>
			<div className="mt-2 mx-10">
				<span className="inline-block w-40 h-1 bg-[#d67940] rounded-full"></span>
				<span className="inline-block w-3 h-1 ml-1 bg-[#d67940] rounded-full"></span>
				<span className="inline-block w-1 h-1 ml-1 bg-[#d67940] rounded-full"></span>
			</div>
			<div className="my-10 mx-10 h-[700px] sm:h-[600px] grid grid-cols-1 grid-rows-4 gap-4 sm:grid-cols-5 sm:grid-rows-4">
				<div className="relative col-span-1 row-span-1 sm:col-span-3 sm:row-span-2 bg-slate-600 rounded-xl bg-[url('../images/1Jemaa-el-Fna.jpg')] bg-no-repeat bg-cover bg-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] cursor-pointer transition-all duration-500 hover:-translate-y-2">
					<div className="flex flex-col items-start justify-end gap-2 h-full w-full bg-gradient-to-t from-slate-900 to-transparent rounded-xl px-5 py-5">
						<p className="text-white font-medium text-3xl">
							Marrakech <span className="text-5xl text-[#ffaf7d]">.</span>
						</p>
						<button
							className="h-fit w-fit  rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group duration-200 text-white"
						>
							<p>Explore more</p>
							<svg
								className="w-6 h-6 group-hover:translate-x-[10%] duration-300 text-[#ffaf7d]"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
								fill="white"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									stroke-linejoin="round"
									stroke-linecap="round"
								></path>
							</svg>
						</button>
					</div>
				</div>
				<div className="relative col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 sm:col-start-4 rounded-xl bg-[url('../images/cw_chefchaouen4_1639c4a1400fac.jpg')] bg-no-repeat bg-cover bg-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] cursor-pointer transition-all duration-500 hover:-translate-y-2">
					<div className="flex flex-col items-start justify-end gap-2 h-full w-full bg-gradient-to-t from-slate-900 to-transparent rounded-xl px-5 py-5">
						<p className="text-white font-medium text-3xl">
							Chefchaouen <span className="text-5xl text-[#ffaf7d]">.</span>
						</p>
						<button
							className="h-fit w-fit  rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group duration-200 text-white"
						>
							<p>Explore more</p>
							<svg
								className="w-6 h-6 group-hover:translate-x-[10%] duration-300 text-[#ffaf7d]"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
								fill="white"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									stroke-linejoin="round"
									stroke-linecap="round"
								></path>
							</svg>
						</button>
					</div>
				</div>
				<div className=" relative col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 sm:row-start-3 rounded-xl bg-[url('../images/2150763780.jpg')] bg-no-repeat bg-cover bg-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] cursor-pointer transition-all duration-500 hover:-translate-y-2">
					<div className="flex flex-col items-start justify-end gap-2 h-full w-full bg-gradient-to-t from-slate-900 to-transparent rounded-xl px-5 py-5">
						<p className="text-white font-medium text-3xl">
							The Sahara Desert <span className="text-5xl text-[#ffaf7d]">.</span>
						</p>
						<button
							className="h-fit w-fit  rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group duration-200 text-white"
						>
							<p>Explore more</p>
							<svg
								className="w-6 h-6 group-hover:translate-x-[10%] duration-300 text-[#ffaf7d]"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
								fill="white"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									stroke-linejoin="round"
									stroke-linecap="round"
								></path>
							</svg>
						</button>
					</div>
				</div>
				<div className=" relative col-span-1 row-span-1 sm:col-span-3 sm:row-span-2 sm:col-start-3 sm:row-start-3 rounded-xl bg-[url('../images/trekking-jebel-toubkal-west-high-atlas-morocco.jpg')] bg-no-repeat bg-cover bg-top shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] cursor-pointer transition-all duration-500 hover:-translate-y-2">
					<div className="flex flex-col items-start justify-end gap-2 h-full w-full bg-gradient-to-t from-slate-900 to-transparent rounded-xl px-5 py-5">
						<p className="text-white font-medium text-3xl">
							The Atlas Mountains <span className="text-5xl text-[#ffaf7d]">.</span>
						</p>
						<button
							className="h-fit w-fit  rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group duration-200 text-white"
						>
							<p>Explore more</p>
							<svg
								className="w-6 h-6 group-hover:translate-x-[10%] duration-300 text-[#ffaf7d]"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
								fill="white"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									stroke-linejoin="round"
									stroke-linecap="round"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
