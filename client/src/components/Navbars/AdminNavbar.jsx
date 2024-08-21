import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const navLinks = [
  { page: "Home", href: "/" },
  { page: "About", href: "/about" },
  { page: "Articles", href: "/articles" },
];
export default function AdminNavbar() {
    const [Active, setActive] = useState()
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const toggleMenu = () => {
      setOpen(!open);
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
  
    return (
      <nav className={` px-6 w-full flex items-center py-3 fixed top-0 z-20 transition-all ${scrolled ? "bg-black bg-opacity-90" : "bg-black bg-opacity-50"}`}>
        <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to={"/"}
            className=" flex items-center gap-2"
            onClick={() => {
              setActive("")
              window.scrollTo(0, 0)
            }}>
            {/* <img src={""} alt="Logo" className="w-14 h-14 object-conatine" /> */}
            <p className="text-white text-[18px] font-bold cursor-pointer">WanderMorocco</p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-5 items-center">
            {navLinks.map((link, key) => (
              <li key={key}
                className={`relative ${Active === link.page ? 'after:w-full font-semibold px-2 text-white' : 'after:w-0 text-secondary text-white hover:text-gray-300 transition-all'} after:h-[3px] after:rounded-full after:bg-white after:absolute after:-z-10 after:-bottom-1 after:left-0 after:transition-all`}>
                <Link to={`${link.href}`} onClick={() => setActive(link.page)}>{link.page}</Link>
              </li>
            ))}
            <li>
              <Link to={"/login"} className=" text-white bg-[#d67940] px-3 py-1 rounded-full font-medium flex justify-center items-center hover:bg-[#c06b36] transition-all">
                Sign in
              </Link>
            </li>
            <li>
              <Link to={"/signup"} className=" text-white bg-[#d67940] px-2 py-1 rounded-full font-medium flex justify-center items-center hover:bg-[#c06b36] transition-all">
                Create Account
                <span className="mt-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
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
            <div className={`transition-transform duration-500 ease-in-out transform ${open ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 w-[50%] h-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border-2 border-gray-100 z-20`}>
              <ul className="list-none w-full mt-28 flex justify-start items-center flex-col gap-5">
                {navLinks.map((link, key) => (
                  <>
                    <li key={key}
                      className={`relative ${Active === link.page ? 'after:w-full font-semibold px-7 text-black' : 'after:w-0 text-white hover:text-gray-300 font-semibold transition-all'} after:h-[45px] after:rounded-full after:bg-white after:absolute after:-z-20 after:-bottom-2.5 after:left-0 after:transition-all`}>
                      <Link to={`${link.href}`} onClick={() => {
                        setActive(link.page)
                        toggleMenu()
                      }}>{link.page}</Link>
                    </li>
                    <div className=" w-full h-[2px] bg-white transform"></div>
                  </>
                ))}
                <li>
              <Link to={"/login"} className=" text-white bg-[#d67940] px-6 py-2 rounded-full font-medium flex justify-center items-center hover:bg-[#c06b36] transition-all">
                Sign in
              </Link>
            </li>
            <div className=" w-full h-[2px] bg-white transform"></div>
            <li>
              <Link to={"/signup"} className=" text-white bg-[#d67940] px-5 py-2 rounded-full font-medium flex justify-center items-center hover:bg-[#c06b36] transition-all">
                Create Account
                <span className="mt-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                  </svg>
                </span>
              </Link>
            </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}
