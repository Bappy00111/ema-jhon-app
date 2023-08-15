import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const ProductCard = ({ product,handleAddToCard }) => {
    // console.log(product)
    const { img, name, price,seller,ratings } = product;


    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body relative">
                <p className=' font-bold text-slate-600'>{name}</p>
                <p className='text-lg text-slate-600'>Price: ${price}</p>
                <p className='text-lg text-slate-600'>Manufacturer : {seller}</p>
                <p className='text-lg text-slate-600 mb-3'>Rating : {ratings} Star</p>
                <div className="card-actions justify-end"></div>
            </div>
            <button onClick={()=>handleAddToCard(product)} className='absolute bottom-0 h-[40px] w-full text-center bg-[#FFE0B3] rounded flex justify-center items-center hover:bg-orange-400 '>
                Add to Card
                <ShoppingCartIcon className='w-6 h-6'/>
                </button>
        </div>

    );
};

export default ProductCard;