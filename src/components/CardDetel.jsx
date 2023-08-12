import React from 'react';

const CardDetel = ({cart}) => {
    // console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
        
    }
    const  totaltax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + totaltax;
    
    
    return (
        <div className='bg-[#FF99004D] p-10 h-screen sticky top-[0] rounded'>
            <h1 className='text-xl lg:text-2xl mb-[30px] mt-5'>Order Summary</h1>
            <div className='text-xl  '>
                <p className='mb-5'>Selected Items: {quantity}</p>
                <p className='mb-5'>Total Price: ${totalPrice}</p>
                <p className='mb-5'>Shipping Charge: ${totalShipping}</p>
                <p className='mb-5'>Tax: ${totaltax.toFixed(2)}</p>
                <p className='mb-5 font-bold'>Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default CardDetel;