import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDetel from './CardDetel';
import OrderCard from './OrderCard';
import { removeFromDb } from '../assets/utilities/fakedb';


const OrderReview = () => {
    const saveCart = useLoaderData()
    const [cart, setCart] = useState(saveCart)

    const handleRemove = (id) => {
        console.log(id)
       const reaming = cart.filter(product => product.id !== id) 
       setCart(reaming)
       removeFromDb(id)

    }
    
    // console.log(data)
    return (
        <div className='max-w-[1240px] mx-auto  grid lg:grid-cols-2 gap-10 md:p-[60px]'>
            {/* orders page  */}
            <div className='col-span-1 p-[20px] mb-2 '>
                
                    {
                        cart.map(product => <OrderCard
                            key={product.id}
                            product={product}
                            handleRemove={handleRemove}
                        >
                        </OrderCard>)
                    }
               
            </div>
            <div className='col-span-1 md:p-[20px] rounded'>
                <CardDetel cart={cart}></CardDetel>
            </div>
        </div>
    );
};

export default OrderReview;