import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";


export default function UserLayout() {
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  return (
    <div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
