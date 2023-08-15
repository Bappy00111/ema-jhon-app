import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CardDetel from './CardDetel';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../assets/utilities/fakedb';

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect((() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }), [])

    // add to localsoteage data 
    const handleAddToCard = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)

    }

    const handleDelet = () =>{
        setCart([])
        deleteShoppingCart()
    }

    // get to localstoreage data 
    useEffect(() => {
        const stodedCart = getShoppingCart();
        const savededCart = [];
        // step : 1 get id 
        for (const id in stodedCart) {
            // step 2 get the product by using id 
            const savedProduct = products.find(product => product.id === id)
            // step: 3 get quantity of the product 
            if (savedProduct) {
                const quantity = stodedCart[id]
                savedProduct.quantity = quantity;
                // step 4 added product saved card 
                savededCart.push(savedProduct)
            }

        }
        // step 5 : retrun the saved cart 
        setCart (savededCart)
    }, [products])



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
                <CardDetel
                 cart={cart}
                 handleDelet={handleDelet}

                 ></CardDetel>
            </div>
        </div>
    );
};

export default Shop;