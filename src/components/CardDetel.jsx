import React from 'react';

const CardDetel = ({cart}) => {
    console.log(cart)
    return (
        <div className='bg-[#FF99004D] p-10 h-screen sticky top-[0] rounded'>
            <h1 className='text-xl lg:text-2xl mb-[30px] mt-5'>Order Summary</h1>
            <div className='text-xl  '>
                <p className='mb-5'>Selected Items: {cart.length}</p>
                <p className='mb-5'>Total Price: $1140</p>
                <p className='mb-5'>Total Shipping Charge: $5</p>
                <p className='mb-5'>Tax: $114</p>
                <p className='mb-5 font-bold'>Grand Total: $1559</p>
            </div>
        </div>
    );
};

export default CardDetel;