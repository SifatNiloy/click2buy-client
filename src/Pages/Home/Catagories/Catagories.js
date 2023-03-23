import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import sneckers from '../../../assets/catagories/sneckers.jpg'
import watch from '../../../assets/catagories/watch.jpg'
import smartphone from '../../../assets/catagories/smartphone.jpg'
import './Catagories.css'
const Catagories = () => {
    return (
        <div className='my-12 mx-12'>
            <div className='flex my-6'>
                <h2 className="text-3xl font-bold">Explore Popular Catagories  |</h2>
                <p className="text-2xl">See All <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></p>
            </div>
            <div className='grid md:grid-cols-5 gap-10'>
                <div>
                    <div className='rounded-products'>
                        <img src={sneckers} alt="" />
                    </div>
                </div>
                <div>
                    <div className='rounded-products'>
                        <img src={watch} alt="" />
                    </div>
                </div>
                <div>
                    <div className='rounded-products'>
                        <img src={smartphone} alt="" />
                    </div>
                </div>
                <div>
                    <div className='rounded-products'>
                        <img src={sneckers} alt="" />
                    </div>
                </div>
                <div>
                    <div className='rounded-products'>
                        <img src={watch} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Catagories;