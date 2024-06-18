import React from 'react'
import { Outlet, useLocation } from 'react-router'
import NavbarPage from './pages/NavbarPage';
import Hero from './components/Hero';
import Footer from './components/Footer';

function AppLayout() {
    const location = useLocation();


    return (
        <div>
            <NavbarPage />
            {location.pathname === "/" && <Hero />}
            <div className='min-h-[80vh]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default AppLayout