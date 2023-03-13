import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='grid md:grid-cols-3 grid-gap-4'>
           
            {
                products.map(product=><Product product={product} key={product.id} />)
            }
        </div>
    );
};

export default Products;