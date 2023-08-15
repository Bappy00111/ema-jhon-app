import React from 'react';
import { TrashIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const CardDetel = ({ cart, handleDelet }) => {
    // console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;

    }
    const totaltax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + totaltax;


    return (
        <div className='bg-[#FF99004D] mx-5 p-5 w-full sticky top-[0] rounded'>
            <h1 className='text-2xl lg:text-3xl font-bold mb-[30px] mt-5'>Order Summary</h1>
            <div className='text-xl '>
                <p className='mb-5'>Selected Items: {quantity}</p>
                <p className='mb-5'>Total Price: ${totalPrice}</p>
                <p className='mb-5'>Shipping Charge: ${totalShipping}</p>
                <p className='mb-5'>Tax: ${totaltax.toFixed(2)}</p>
                <p className='mb-5 font-bold'>Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
            <div className=' h-[45px] lg:h-[56px] border border-1 bg-[#FF3030;] rounded flex justify-center items-center gap-2 mb-3'>

                <Link className='flex gap-2'>
                    <button onClick={handleDelet} className='text-white'>Clear Cart</button>
                    <TrashIcon className='w-6 h-6 text-white' />
                </Link>
            </div>
            <div className=' h-[45px] lg:h-[56px] border border-1 bg-[#F90;] rounded flex justify-center items-center gap-2'>

                <Link className='flex gap-2' to='/orderReview'>
                    <button className='text-white'>Review Order</button>
                    <ArrowRightIcon className='w-6 h-6 text-white' />
                </Link>
            </div>
        </div>
    );
};

export default CardDetel;