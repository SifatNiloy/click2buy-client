import React, { useEffect, useState } from 'react';
import HomeProducts from '../../Product/HomeProducts';

const LimitedProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/limitedProduct`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            {/* <h2>products length:{products?.length} </h2> */}
            <div className='grid grid-cols-4 justify-center gap-4'>

                {
                    products.map(product =><HomeProducts product={product} key={product._id} />)
                }
            </div>
        </div>
    );
};

export default LimitedProducts;