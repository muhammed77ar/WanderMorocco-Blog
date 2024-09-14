
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

export default function Hero() {
    const user = useSelector((state) => state.auth.user);

  return (
    <section
      className="relative bg-[url(../images/13892.jpg)] bg-cover bg-center bg-no-repeat shadow-[0px_37px_27px_-11px_rgba(161,161,161,0.63)]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex flex justify-center items-center sm:justify-start h-screen lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          {/* Conditional Rendering based on Authentication */}
          {user ? (
            <>
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                Welcome back, {user.name}!
                <strong className="block font-extrabold text-[#d67940]">
                  Ready to Share Your Journey?
                </strong>
              </h1>

              <p className="mt-4 w-full text-white font-medium sm:text-xl/relaxed">
                Start sharing your experiences and adventures in Morocco with the community.
              </p>

              <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
                <Link
                  to={"/user/postArticle"}
                  className="block w-full rounded bg-[#d67940] px-12 py-3 text-sm font-medium text-white shadow transition ease-in hover:bg-[#b06334] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Share Your Journey
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                Discover Morocco’s
                <strong className="block font-extrabold text-[#d67940]">
                  Hidden Treasures and Timeless Beauty
                </strong>
              </h1>

              <p className="mt-4 w-full text-white font-medium sm:text-xl/relaxed">
                Join us on a journey through vibrant souks, stunning landscapes, and hidden gems as we uncover the beauty and culture of Morocco.
              </p>

              <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
                <Link
                  to={"/signup"}
                  className="block w-full rounded bg-[#d67940] px-12 py-3 text-sm font-medium text-white shadow transition ease-in hover:bg-[#b06334] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </Link>

                <a
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#be6a35] shadow hover:text-[#ad6131] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
