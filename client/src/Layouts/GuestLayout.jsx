import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function GuestLayout() {
  return (
    <div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <footer className=" h-[300px] bg-black">
             
        </footer>
    </div>
  )
}
