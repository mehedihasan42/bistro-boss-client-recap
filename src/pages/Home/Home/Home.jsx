import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import About from '../about/About';
import PolularManu from '../PopularMenu/PolularManu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <About></About>
            <PolularManu></PolularManu>
        </div>
    );
};

export default Home;