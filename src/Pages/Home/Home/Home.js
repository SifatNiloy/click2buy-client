import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Catagories from '../Catagories/Catagories';
import LimitedProducts from '../LimitedProducts/LimitedProducts';



const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Catagories/>
            <Brands/>
            <LimitedProducts/>
        </div>
    );
};

export default Home;