import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import NotFound from '../Shared/NotFound';

import  './Shop.css';
const Shop = () => {
    
    // const {products, count }= useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage]= useState(0);
    const [size, setSize] = useState(10);
    const pages = Math.ceil(count / size);
    useEffect(()=>{
        const url = `https://click2buy-server.sifatniloy.com/products?page=${page}&size=${size}`;
        // console.log(page, size)
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            setCount(data.count);
            setProducts(data.products)
        })
    },[page, size])
    const handleSearch = async (event) => {
        event.preventDefault()
        var key = document.getElementById("myInput").value;
        
        if (key) {
            let result = await fetch(`https://click2buy-server.sifatniloy.com/products/${key}`);
                result = await result.json();
            if (result) {
                setProducts(result)
            }
            else{
                alert("Not found")  
            }
        }
        else if(key==""){
            alert("enter a name")
        }
        
        document.getElementById("myInput").value = "";
    }
    return (
        <div className='my-12'>
            <div className='flex align-items-center justify-center'>
                <form className="form-control  ">
                    <div className="input-group ">
                        <input type="text" placeholder="Search…" className="input input-bordered w-96" id="myInput" />
                        <button className="btn btn-square" onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>
            </div>
            <div>
                {/* <h2>products: {products?.length} </h2> */}
                <div className='grid grid-cols-4 justify-center gap-4'>

                    { 
                        products.length > 0 ?
                        products.map(product => <Product product={product} key={product._id} /> )
                            :  <NotFound/>
                    }
                </div>
                {/* <p className='mt-12'>currently selected page: {page} and size :{size}</p> */}
                <div className="pagination my-12 flex justify-center gap-6 ">

                    {
                        [...Array(pages).keys()].map(number => <button className={page===number+1 && 'selected'} key={number} onClick={() => setPage(number+1)}>
                            {number+1}
                            
                        </button>)
                    }
                    <select onChange={event => setSize(event.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;