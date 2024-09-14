import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../axios/axios";
import { setUserInfo } from "../redux/slices/authSlice";
import { useEffect } from "react";


export default function AdminLayout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 
  const dispatch = useDispatch()
 

  const GetUserData = async () => {
    try {
      const response = await axiosClient.get("api/user");
      dispatch(setUserInfo(response?.data?.user));
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      GetUserData();
    }
  }, [isAuthenticated]);
  return (
    <div className=" font-lexend">
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
