import { Link, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../axios/axios";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const navLinks = [
    { page: "Home", href: "user/" },
    { page: "About", href: "user/about" },
    { page: "Discover Journeys", href: "user/articles" },
];
export default function UserNavbar() {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [Active, setActive] = useState()
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        
    }, []);

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('#dropdownUserAvatarButton') && !event.target.closest('#dropdownAvatar')) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const logout = async () => {
        const response = await axiosClient.post("/logout");
        dispatch(logout())
        navigate("/login")
    }

    return (
        <nav className={` px-6 w-full flex items-center py-3 fixed top-0 z-20 transition-all ${scrolled ? "bg-black bg-opacity-90" : "bg-black bg-opacity-50"}`}>
            <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to={"/"}
                    className=" flex items-center gap-2"
                    onClick={() => {
                        setActive("")
                        window.scrollTo(0, 0)
                    }}>
                    <img src={"../images/logo-no-background.png"} alt="Logo" className=" w-[200px] object-conatine" />
                </Link>
                <div className=" flex gap-5 justify-center items-center">
                <ul className="list-none hidden sm:flex flex-row gap-5 items-center">
                    {navLinks.map((link, key) => (
                        <li key={key}
                            className={`relative ${Active === link.page ? 'after:w-full font-semibold px-2 text-white' : 'after:w-0 text-secondary text-white hover:text-gray-300 transition-all'} after:h-[3px] after:rounded-full after:bg-white after:absolute after:-z-10 after:-bottom-1 after:left-0 after:transition-all`}>
                            <Link to={`${link.href}`} onClick={() => setActive(link.page)}>{link.page}</Link>
                        </li>
                    ))}
                    <li>
                        <Link to={"/user/postArticle"} onClick={() =>  setActive("")} className=" text-white bg-[#d67940] px-2 py-1 rounded-full font-medium flex justify-center items-center hover:bg-[#c06b36] transition-all">
                            Share your journey
                            <span className="mt-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                                </svg>
                            </span>
                        </Link>
                    </li>
                </ul>
                <button id="dropdownUserAvatarButton" onClick={() => {toggleDropdown(); setActive("")}} data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-10 h-10 rounded-full object-cover" src={import.meta.env.VITE_API_BASE_URL + user?.profile} alt="user photo" />
                        </button>
                {/* Dropdown menu */}
                {dropdownOpen && (
                    <div id="dropdownAvatar" className="absolute right-2 top-full mt-1 z-20 bg-slate-600 divide-y divide-gray-100 rounded-lg shadow w-44">
                        <div className="px-4 py-3 text-sm text-white">
                            <div>{user?.name || "WanderMorocco Member"}</div>
                            <div className="font-medium truncate">{user?.email || "name@flowbite.com"}</div>
                        </div>
                        {/* <ul className="text-sm text-white">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-black">Profile</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-black">Settings</a>
                            </li>
                        </ul> */}
                        <div className="cursor-pointer">
                            <Link to={"user/profile"} className="px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black flex justify-center items-center gap-2"><CgProfile className=" text-xl -ml-2" />Profile</Link>
                        </div>
                        <div className="cursor-pointer">
                            <a className=" px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black flex justify-center items-center gap-2"><IoMdSettings className=" text-lg" />Settings</a>
                        </div>
                        <div className="cursor-pointer">
                            <a onClick={logout} className="rounded-b-lg px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black flex justify-center items-center gap-2"><RiLogoutBoxLine className=" text-lg" />Sign out</a>
                        </div>
                    </div>
                )}
                
                <div className="sm:hidden flex justify-end items-center">
                    <div className="relative sm:max-w-xl mx-auto">
                        <nav>
                            <button
                                className="text-gray-500 p-5 flex justify-center items-center rounded-full w-8 h-8 focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <span
                                        aria-hidden="true"
                                        className={`h-1 w-7 bg-white transform rounded-sm transition duration-500 ease-in-out ${open ? 'rotate-45 translate-y-1' : '-translate-y-1'
                                            }`}
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className={`h-1 w-7 bg-white transform rounded-sm transition duration-500 ease-in-out ${open ? 'opacity-0' : ''
                                            }`}
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className={`h-1 w-7 bg-white transform rounded-sm transition duration-500 ease-in-out ${open ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                                            }`}
                                    ></span>
                                </div>
                            </button>
                        </nav>
                    </div>
                    </div>
                    <div className={`transition-transform duration-500 ease-in-out transform ${open ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 w-[50%] h-full bg-white z-20 shadow-[8px_0px_11px_-1px_rgba(0,_0,_0,_0.1)]`}>
                        <ul className="list-none w-full mt-28 flex justify-start items-center flex-col gap-10">
                            {navLinks.map((link, key) => (
                                <>
                                    <li key={key}
                                        className={`relative ${Active === link.page ? 'after:w-full font-semibold px-7 text-white' : 'after:w-0 text-back hover:text-gray-300 font-semibold transition-all'} after:h-[45px] after:rounded-full after:bg-black after:absolute after:-z-20 after:-bottom-2.5 after:left-0 after:transition-all`}>
                                        <Link to={`${link.href}`} onClick={() => {
                                            setActive(link.page)
                                            toggleMenu()
                                        }}>{link.page}</Link>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
