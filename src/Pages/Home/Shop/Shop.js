import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import  './Shop.css';
const Shop = () => {
    const {products, count }= useLoaderData();
    const [page, setPage]= useState(0);
    const [size, setSize]= useState(12);
    const pages = Math.ceil(count / size);
    function getInputValue(event) {
        event.preventDefault()
        var inputVal = document.getElementById("myInput").value;
        console.log(inputVal)
        document.getElementById("myInput").value = "";
    }
    return (
        <div>
            <div className='flex align-items-center justify-center'>
                <form className="form-control ">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" id="myInput" />
                        <button className="btn btn-square" onClick={getInputValue}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <h2>products: {products?.length} </h2>
                <div className='grid grid-cols-3 justify-center gap-4'>

                    {
                        products.map(product => <Product product={product} key={product._id} /> )
                    }
                </div>
                <div className="pagination mb-24 flex justify-center gap-6 mt-12">
                    <p>currently selected page: {page}</p>
                    {
                        [...Array(pages).keys()].map(number => <button className={page===number+1 && 'selected'} key={number} onClick={() => setPage(number+1)}>
                            {number+1}
                            
                        </button>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Shop;