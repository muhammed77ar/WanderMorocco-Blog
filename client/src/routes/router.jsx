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
import AuthLayout from "../Layouts/AuthLayout";
import ProtectedRoute from "../ProtectedRoute";
import GoogleCallback from "../pages/GoogleCallback";
import EditUserProfile from "../pages/EditUserProfile";


const router = createBrowserRouter([
    {
        element: (
            <ProtectedRoute allowedRoles={[]} isAuthRoute>
              <GuestLayout />
            </ProtectedRoute>
          ),
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            {path:"/articles", element: <Articles />}
        ],
    },
    {
        element: (
            <ProtectedRoute  allowedRoles={['user']} isAuthRoute={false}>
                <UserLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: "user/", element: <Home /> },
            { path: "user/profile", element: <UserProfile /> },
            {path:"user/articles", element : <Articles />},
            {path : "user/postArticle", element: <PostArticle />},
            {path : "user/about" , element:<About />},
        ],
    },
    {
        element: (
            <ProtectedRoute allowedRoles={['admin']} isAuthRoute={false}>
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: "admin/dashboard", element: <AdminDashboard /> },
            { path : "admin/profile", element : <AdminProfile />},
        ],
    },
    {
        element: (
            <ProtectedRoute allowedRoles={[]} isAuthRoute>
                <AuthLayout />
            </ProtectedRoute>
        ),
        children : [
            { path: "/login", element: <Login /> },
            {path:"/signup", element: <Signup />},
            {
                path: "/auth/google",
                element: <GoogleCallback />,
            },
        ]
    },
    {
        path: "*",
        element: <Notfound />,
    }
])

export default router