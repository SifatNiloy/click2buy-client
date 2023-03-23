import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Catagories from '../Catagories/Catagories';



const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Catagories/>
            <Brands/>
        </div>
    );
};

export default Home;