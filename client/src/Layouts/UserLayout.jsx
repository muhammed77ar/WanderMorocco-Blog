import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../axios/axios";
import { setUserInfo } from "../redux/slices/authSlice";
import { useEffect } from "react";
import UserNavbar from "../components/Navbars/UserNavbar";


export default function UserLayout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user)
  console.log(user)
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
        <UserNavbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
