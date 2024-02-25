import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation()
    const hidden = location.pathname === '/login' || location.pathname === '/signUp'
    return (
        <div>
            {hidden || <NavBar></NavBar>}
            <Outlet></Outlet>
            {hidden || <Footer></Footer>}
        </div>
    );
};

export default Main;