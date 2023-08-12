import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CardDetel from './CardDetel';
import { addToDb, getShoppingCart } from '../assets/utilities/fakedb';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart,setCart] = useState([])
    useEffect((() => {
        fetch('/public/product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }), [])
     
    // add to localsoteage data 
    const handleAddToCard = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)

    }

    // get to localstoreage data 
    useEffect(()=>{
        const stodedCart = getShoppingCart();
        console.log(stodedCart)
    },[])


    
    return (
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-4 '>
            <div className=' col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 my-[50px] '>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    >
                    </ProductCard>)
                }
            </div>
            {/* card detel  */}
            <div className='col-span-1 '>
               <CardDetel cart={cart}></CardDetel>
            </div>
        </div>
    );
};

export default Shop;