import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            
            <div className='grid md:grid-cols-3 grid-gap-4'>

                {
                    products.map(product => <Product product={product} key={product._id} />)
                }
            </div>
        </div>

    );
};

export default Products;