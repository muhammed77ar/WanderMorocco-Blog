import {useSelector} from "react-redux"
import { AuthSelector } from "./redux/selectores"
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles, isAuthRoute  }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.userRole);

    // If authenticated
  if (isAuthenticated) {
    // Redirect authenticated users away from auth routes
    if (isAuthRoute) {
        if (userRole === 'admin') {
            return <Navigate to="/admin/dashboard" />;
          } else if (userRole === 'user') {
            return <Navigate to="/user" />;
        }
    }

    // Redirect to the correct layout based on user role
    if (allowedRoles && !allowedRoles.includes(userRole)) {
      return <Navigate to="/login" />;
    }
  } else if (!isAuthenticated && !isAuthRoute) {
    // Redirect non-authenticated users to the login page
    return <Navigate to="/login" />;
  }
      
  return children
}
