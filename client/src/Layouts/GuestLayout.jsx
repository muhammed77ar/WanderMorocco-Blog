import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer";

export default function GuestLayout() {
 
  
  return (
    <div className=" font-lexend">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
