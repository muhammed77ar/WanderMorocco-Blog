import { IoMdSend } from "react-icons/io";
export default function CommentSection() {
  return (
    <section className="relative">
    <div className="w-full max-w-7xl md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-7 gap-7 inline-flex">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">Comments</h2>
            <div className="w-full relative flex justify-between items-center gap-2">
                    <input type="text"
                        className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
                        placeholder="Leave a comment..." />
                    <a href="" className="absolute right-6">
                        <IoMdSend className="text-2xl text-[#d67940]" />
                    </a>
                </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
                <div
                    className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex">
                    <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                        <div className="w-full justify-between items-center inline-flex">
                            <div className="justify-start items-center gap-2.5 flex">
                                <div
                                    className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                                    <img className="rounded-full" src="https://pagedone.io/asset/uploads/1710225753.png"
                                        alt="John smith image" />
                                </div>
                                <div className="flex-col justify-start items-start gap-1 inline-flex">
                                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">John smith</h5>
                                    <h6 className="text-gray-500 text-xs font-normal leading-5">5 Day ago</h6>
                                </div>
                            </div>
                            
                        </div>
                        <p className="text-gray-800 text-sm font-normal leading-snug">Mauris luctus habitasse turpis
                            elementum vitae in. Ut habitasse orci sed aliquam bibendum. Sem in nisl vestibulum
                            rhoncus sed diam amet nulla. Netus feugiat nunc vulputate eros pellentesque. A at augue
                            elementum aliquet in aliquet. Vitae amet quisque massa egestas amet. Vitae id ipsum
                            lacus tellus facilisis sit. Nunc ut pellentesque lacus massa arcu neque mi ultrices
                            convallis.</p>
                    </div>
                </div>
                <div
                    className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                        <div className="w-full justify-between items-center inline-flex">
                            <div className="justify-start items-center gap-2.5 flex">
                                <div
                                    className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://pagedone.io/asset/uploads/1710238051.png"
                                        alt="Emma Davis image" />
                                </div>
                                <div className="flex-col justify-start items-start gap-1 inline-flex">
                                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">Emma Davis</h5>
                                    <h6 className="text-gray-500 text-xs font-normal leading-5">4 Day ago</h6>
                                </div>
                            </div>
                            
                        </div>
                        <p className="text-gray-800 text-sm font-normal leading-snug">Consectetur proin ac ac urna nulla
                            gravida praesent id. Dapibus elementum bibendum non diam vel. Pellentesque ut risus sit
                            pretium. Quis ac interdum at habitant montes molestie. Amet nunc dapibus at molestie
                            amet. Cursus ullamcorper ipsum phasellus id nisl euismod accumsan. Pellentesque
                            fermentum mauris purus commodo enim. Consequat est ipsum viverra curabitur.</p>
                    </div>
                </div>
                <div
                    className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-end gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-end gap-3.5 flex">
                        <div className="w-full justify-between items-center inline-flex">
                            <div className="w-full justify-start items-center gap-2.5 flex">
                                <div
                                    className="w-10 h-10 bg-slate-400 rounded-full justify-start items-start gap-2.5 flex">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://pagedone.io/asset/uploads/1710237485.png"
                                        alt="Danial Harrison image" />
                                </div>
                                <div className="flex-col justify-start items-start gap-1 inline-flex">
                                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">Danial Harrison
                                    </h5>
                                    <h6 className="text-gray-500 text-xs font-normal leading-5">5 Hour ago</h6>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-800 text-sm font-normal leading-snug">Malesuada rhoncus senectus amet
                            dui tincidunt. Porttitor lectus diam sit sit pellentesque ultrices. Molestie libero ac
                            odio at tristique sapien est venenatis. Egestas vitae velit vestibulum egestas felis
                            euismod. Morbi ac vel scelerisque morbi eu nisi gravida tellus. Pulvinar orci at
                            elementum massa morbi pellentesque non nulla. Elementum faucibus urna est mattis. Non
                            aliquet in molestie id nisl. Bibendum mauris dolor nisl elit ut eu viverra. Ut facilisi
                            turpis neque eu risus etiam senectus vel. Orci pharetra ornare amet massa. Tempus orci
                            vestibulum pulvinar tincidunt amet dictum sit tempor.</p>
                        <div className="w-full flex flex-col sm:flex-row justify-end items-start gap-6">
                            <button
                                className="sm:w-fit w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-gray-200 hover:border-transparent transition-all duration-700 ease-in-out border border-gray-200 justify-center items-center flex">
                                <span
                                    className="px-2 text-gray-900 text-base font-semibold leading-relaxed">Delete</span>
                            </button>
                            <button
                                className="sm:w-fit w-full px-5 py-2.5 bg-[#d67940] hover:bg-[#b5622f] transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span
                                    className="px-2 py-px text-white text-base font-semibold leading-relaxed">Edit</span>
                            </button>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>
                                        
  )
}
