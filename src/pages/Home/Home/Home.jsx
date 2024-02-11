import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import About from '../about/About';
import PolularManu from '../PopularMenu/PolularManu';
import ChefsRcms from '../ChefsRcmd/ChefsRcms';
import OurMenu from '../OurMenu/OurMenu';
import Testimonials from '../Tesrimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <About></About>
            <PolularManu></PolularManu>
            <ChefsRcms></ChefsRcms>
            <OurMenu></OurMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;