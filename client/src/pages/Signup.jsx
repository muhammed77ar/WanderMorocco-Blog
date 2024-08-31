import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axiosClient from "../axios/axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";


export default function Signup() {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setConfirmationPassword] = useState(false);
  const [Loading, setIsLoading] = useState(false)
  const [googleLoginUrl, setGoogleLoginUrl] = useState(null);
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const handelSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      name : nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation : confirmPasswordRef.current.value
    }

    try {
      setIsLoading(true)
      const response = await axiosClient.post("/register", payload);
      if (response && response.status === 201) {
        console.log(response)
        const data = response.data;
        const token = data?.token;
        const role = data?.user?.role;

        if (token && role) {
          dispatch(login({ role, token }));
        }
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // Backend validation errors
        console.log(error.response.data.errors);
      } else {
        // Other errors
        console.log(error);
      }
    }finally{
      setIsLoading(false)
    }

  }
  // Fetch Google OAuth URL
  useEffect(() => {
    const fetchGoogleUrl = async () => {
      try {
        const response = await axiosClient.get("api/auth/google"); // Adjust the endpoint accordingly
        setGoogleLoginUrl(response.data.url);
      } catch (error) {
        console.error("Failed to fetch Google OAuth URL", error);
      }
    };

    fetchGoogleUrl();
  }, []);
  return (
    <div className="py-6 bg-[url('../images/2150763780.jpg')] bg-no-repeat bg-cover">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl mt-[50px]">
        <div className="hidden lg:block lg:w-1/2 bg-[url('../images/2150763780.jpg')] bg-cover bg-no-repeat"></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome</p>
          <a href={googleLoginUrl} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
            <div className="px-4 py-3">
              <svg className="h-6 w-6" viewBox="0 0 40 40">
                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                <path d="M5.25497 12.2425L
                        10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
              </svg>
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign up with Google</h1>
          </a>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-sm text-center text-gray-500">or sign up with email</a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form action="" onSubmit={handelSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input ref={nameRef} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input ref={emailRef} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
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
                type="button"
                onClick={() => setConfirmationPassword(!showConfirmationPassword)}
                className="absolute top-12 right-3 transform -translate-y-1/2 text-gray-500"
              >
                {showConfirmationPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className=" text-xl" />}
              </button>
            </div>
            <div className="mt-8">
            {Loading ? <button type="submit" className="bg-gray-700 text-white font-bold py-3 px-4 w-full rounded hover:bg-gray-600 flex justify-center items-center">
                <div className="flex flex-row gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#d67940]  animate-bounce"></div>
                  <div
                    className="w-4 h-4 rounded-full bg-[#d67940]  animate-bounce [animation-delay:-.3s]"
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full bg-[#d67940] animate-bounce [animation-delay:-.5s]"
                  ></div>
                </div>
              </button>
                : <button type="submit" className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                  Sign up
                </button>}
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to={"/login"} className="text-xs text-[#d67940] uppercase">or Login</Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
