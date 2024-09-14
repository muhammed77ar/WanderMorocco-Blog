import { useSelector } from "react-redux";
import { MdOutlineEmail } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";
import UserPosts from "../components/UserPosts";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Modal from "../components/Modal";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import axiosClient from "../axios/axios";
import PostCard from "../components/PostCard";

export default function UserProfile() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [IsLoading, SetIsLoading] = useState(false)
  const [showConfirmationPassword, setConfirmationPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const profileRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // change image
  const handleImageChange = () => {
    const file = profileRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      profile: profileRef.current.files[0],
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value,
      "_method": "PUT"
    }
    try {
      SetIsLoading(true)
      const response = await axiosClient.post(`api/users/${user?.id}`, payload)
      if (response) {
        setOpen(false)
        document.location.reload();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // Backend validation errors
        console.log(error.response.data.errors);
      } else {
        // Other errors
        console.log(error);
      }
    } finally {
      SetIsLoading(false)
    }

  }


  return (
    <main className="">
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
                <div className="w-full h-auto lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={import.meta.env.VITE_API_BASE_URL + user?.profile}
                      className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[170px] h-[170px] object-cover"
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
                      <form action="" onSubmit={handelSubmit} >
                        <div className="grid my-auto mx-auto">
                          <div
                            className={`relative mx-auto flex justify-center w-[141px] ring-4 ring-[#d67940] h-[141px] rounded-full bg-cover bg-center bg-no-repeat`}>
                            {previewImage ?
                              <img src={previewImage} alt="" className=" absolute rounded-full w-full h-full object-cover" />
                              :
                              <img src={import.meta.env.VITE_API_BASE_URL + user?.profile} alt="" className=" absolute rounded-full w-full h-full object-cover" />}

                            <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">

                              <input
                                ref={profileRef}
                                type="file"
                                name="profile"
                                id="upload_profile"
                                onChange={handleImageChange}
                                hidden />

                              <label htmlFor="upload_profile">
                                <svg data-slot="icon" className=" absolute text-[#d67940] bg-gray-200 rounded-full z-10" fill="none"
                                  stroke-width="1.5" width="28" stroke="currentColor" viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                  </path>
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                  </path>
                                </svg>
                              </label>
                            </div>
                          </div>

                          <div className=" text-[#202142]">
                            <div className="flex flex-col items-center justify-center w-full sm:mb-6">
                              <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <div className="mt-4">
                                  <label className="block text-gray-700 text-left text-sm font-bold mb-1">Username</label>
                                  <input ref={nameRef} defaultValue={user?.name} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                                </div>
                                <div className="mt-4">
                                  <label className="block text-gray-700 text-left text-sm font-bold mb-1">Email Address</label>
                                  <input ref={emailRef} defaultValue={user?.email} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <div className="mt-4 relative">
                                  <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                  </div>
                                  <input ref={passwordRef} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type={showPassword ? "text" : "password"} />
                                  <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-12 right-3 transform -translate-y-1/2 text-gray-500"
                                  >
                                    {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className=" text-xl" />}
                                  </button>
                                </div>
                                <div className="mt-4 relative">
                                  <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                                  </div>
                                  <input ref={confirmPasswordRef} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type={showConfirmationPassword ? "text" : "password"} />
                                  <button
                                    type="submit"
                                    onClick={() => setConfirmationPassword(!showConfirmationPassword)}
                                    className="absolute top-12 right-3 transform -translate-y-1/2 text-gray-500"
                                  >
                                    {showConfirmationPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className=" text-xl" />}
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className=" w-full mt-4">
                              {IsLoading ? <button type="submit" className="w-full flex justify-center items-center text-center px-6 py-5 text-white transition-all bg-[#d67940]  rounded-md shadow-xl hover:bg-[#b06130] hover:text-white shadow-neutral-300 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px">
                                <div className="flex flex-row gap-2">
                                  <div className="w-4 h-4 rounded-full bg-white  animate-bounce"></div>
                                  <div
                                    className="w-4 h-4 rounded-full bg-white  animate-bounce [animation-delay:-.3s]"
                                  ></div>
                                  <div
                                    className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"
                                  ></div>
                                </div>
                              </button>
                                : <button className="w-full text-center px-6 py-4 text-white transition-all bg-[#d67940]  rounded-md shadow-xl hover:bg-[#b06130] hover:text-white shadow-neutral-300 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px">
                                  Save Changes
                                </button>}
                            </div>
                          </div>

                        </div>
                      </form>
                    </Modal>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {user?.post_count}
                      </span>
                      <span className="text-sm text-blueGray-400">Posts</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {user?.comment_count}
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
              <div className="mt-10 py-10 border-t border-blueGray-200">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <h1 className="mb-10 font-normal text-4xl leading-relaxed text-blueGray-700 flex justify-center items-center gap-2">
                      <FaSignsPost className=" text-[#d67940]" />
                      Your journeys
                    </h1>
                    <div className=" flex flex-col justify-center mb-5 items-center w-full  gap-10 md:mr-3">
                      {user?.posts.length > 0 ?

                        <>
                        { user?.posts.map(post => (
                          <UserPosts key={post?.id} post={post} user={user} />
                        ))} 
                        </>
                        : 
                        <div>No posts yet</div>

                      }
                    </div>
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
