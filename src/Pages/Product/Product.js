import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { name, seller, price, stock, ratings, img, quantity } = product;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl mt-12">
            <figure ><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price : {price}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;