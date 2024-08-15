import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layouts/UserLayout";
import UserProfile from "../pages/UserProfile";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import GuestLayout from "../Layouts/GuestLayout";
import AdminLayout from "../Layouts/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import AdminProfile from "../pages/AdminProfile";
import PostArticle from "../pages/PostArticle";
import Articles from "../pages/Articles";
import Notfound from "../pages/Notfound";


const router = createBrowserRouter([
    {
        element: <GuestLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/login", element: <Login /> },
            {path:"/signup", element: <Signup />},
            {path:"/articles", element: <Articles />}
        ],
    },
    {
        element: <UserLayout />,
        children: [
            { path: "user/", element: <Home /> },
            { path: "user/profile", element: <UserProfile /> },
            {path:"user/articles", element : <Articles />},
            {path : "user/postArticle", element: <PostArticle />},
            {path : "user/about" , element:<About />}
        ],
    },
    {
        element: <AdminLayout />,
        children: [
            { path: "admin/dashboard", element: <AdminDashboard /> },
            { path : "admin/profile", element : <AdminProfile />},
        ],
    },
    {
        path: "*",
        element: <Notfound />,
    }
])

export default router