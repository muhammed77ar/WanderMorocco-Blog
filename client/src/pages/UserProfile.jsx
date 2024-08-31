import { useSelector } from "react-redux";
import { MdOutlineEmail } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";
import UserPosts from "../components/UserPosts";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";

export default function UserProfile() {
  const [open, setOpen] = useState(false)
  const user = useSelector((state) => state.auth.user)
  return (
    <main className="profile-page">
      <section className="relative block h-[500px]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover bg-[url('../images/trekking-jebel-toubkal-west-high-atlas-morocco.jpg')] bg-no-repeat"
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
          style={{ transform: 'translateZ(0px)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={import.meta.env.VITE_API_BASE_URL + user?.profile}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-[#d67940] active:bg-[#d67940] uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setOpen(true)}
                    >
                      Edit Your Profile
                    </button>
                    <Modal open={open} onClose={() => setOpen(false)}>
                      <div className="text-center w-56">
                        <div className="mx-auto my-4 w-48">
                          <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
                          <p className="text-sm text-gray-500">
                            Are you sure you want to delete this item?
                          </p>
                        </div>
                        <div className="flex gap-4">
                          <button className="btn btn-danger w-full">Delete</button>
                          <button
                            className="btn btn-light w-full"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Posts</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {user?.name}
                </h3>
                <div className="text-base leading-normal mt-0 mb-2 text-blueGray-400 font-bold flex justify-center items-center gap-2">
                  <MdOutlineEmail className=" text-2xl" />
                  {user?.email}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10 flex justify-center items-center gap-2">
                  <FaHouseUser className=" text-2xl" />
                  Member of the WanderMorocco community.
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <h1 className="mb-10 font-normal text-4xl leading-relaxed text-blueGray-700 flex justify-center items-center gap-2">
                      <FaSignsPost className=" text-[#d67940]" />
                      Your journeys
                    </h1>
                    <UserPosts />
                    <a href="#pablo" className="font-normal text-[#d67940]">
                      Show more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
