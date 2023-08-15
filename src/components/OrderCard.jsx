import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const OrderCard = ({ product, handleRemove }) => {
    // console.log(product)
    const { img, name, price, shipping, id } = product;
    return (

        <div className='w-[440px]  md:w-[571px] md:h-[107px] border border-1 border-[#95A0A7] mb-[25px] rounded-lg p-2'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <img className='w-[91px] h-[91px] rounded' src={img} alt="" />
                    <div>
                        <p className='text-lg'>{name}</p>
                        <p>Price: <span className='text-amber-500'>${price}</span></p>
                        <p>Shipping Charge: <span className='text-amber-500'>$  {shipping}</span></p>
                    </div>
                </div>
                <div className='bg-[#EB5757] rounded-full w-[55px] h-[55px] flex justify-center items-center'>
                   <Link >
                   <TrashIcon onClick={()=> handleRemove(id)} className='w-10 h-10 text-[#4f4141]' />
                   </Link>
                </div>
            </div>
        </div>
    )



    // -------------------------x-----------------------------
    {/* // <div className='py-2'>
        //     <div className='w-full h-[107px] border border-[#95A0A7;] rounded-lg p-2'>
        //         <div className='flex justify-between items-center'>
        //             <div className='flex  gap-3 '>
        //                 <img className='w-[90px] h-[90px] rounded' src={img} alt="" />
        //                 <div>
        //                     <p className='text-lg'>{name}</p>
        //                     <p>Price: <span className='text-amber-500'>${price}</span></p>
        //                     <p>Shipping Charge: <span className='text-amber-500'>$       {shipping}</span></p>
        //                 </div>
        //             </div>
        //             <div onClick={() => handleRemove(id)} className='mr-3 bg-red-500 rounded-full'>
        //                <Link> <TrashIcon className='w-10 h-10 ' /></Link>
        //             </div>
        //         </div>

        //     </div>
        // </div> */}

};

export default OrderCard;