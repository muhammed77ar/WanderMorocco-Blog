
import Navbar from '../components/Navbars/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function AuthLayout() {
 
  
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
