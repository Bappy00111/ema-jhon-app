import React, { useState } from 'react';
import logo from '../../src/assets/images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='max-w-[1240px] mx-auto h-[80px] bg-[#1C2B35] flex justify-between items-center  px-[60px] '>
            <div>
                <img src={logo} alt="" />
            </div>
            {/* {
                openMenu ?
                <XMarkIcon onClick={()=>setOpenMenu(!openMenu)} className='w-6 text-white md:hidden'/>
                :
                <Bars3BottomRightIcon onClick={()=>setOpenMenu(!openMenu)} className='w-6 text-white md:hidden'/>
            } */}




            <ul className='text-white hidden  md:flex gap-5 '>
                <NavLink
                    to='/' className={({ isActive }) => isActive ? 'text-orange-400' : 'default:'}>
                    <li>Shop</li></NavLink>
                <NavLink
                    to='/orderReview' className={({ isActive }) => isActive ? 'text-orange-400' : 'default:'}>
                    <li>Order Review</li></NavLink>
                <NavLink
                    to='/login' className={({ isActive }) => isActive ? 'text-orange-400' : 'default:'}>
                    <li>Login</li></NavLink>
            </ul>

            {/* Responceive menu  */}
            <div className='md:hidden'>
                <Bars3BottomRightIcon onClick={() => setOpenMenu(!openMenu)} className='w-6 text-white ' />
                {
                    (openMenu) && (
                        <div className='absolute top-0 left-0 w-full z-10 '>
                            <div className='m-5 bg-white rounded shadow-xl p-5'>
                                <button onClick={() => setOpenMenu(!openMenu)}>
                                    <XMarkIcon className='h-6 w-6 text-black mb-3' />
                                </button>
                                {/* mobile nav item secion  */}

                                <ul className='text-black space-y-5 '>
                                    <li>
                                        <NavLink
                                            to='/' className={({ isActive }) => isActive ? 'text-orange-400' : 'default:'}>
                                            Shop</NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to='/orderReview' className={({ isActive }) => isActive ? 'text-orange-400' : 'default:'}>
                                            OrderReview</NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to='/login' className={({ isActive }) => isActive ? 'text-orange-400' : 'default:'}>
                                            Login</NavLink>
                                    </li>


                                    


                                   
                            </ul>

                        </div>
                        </div>

            )


                }
        </div>


            {/* <ul className={`text-white  w-full h-screen md:hidden fixed bg-black top-[80px]
             ${openMenu ? 'left-[0]':'left-[-100%]'} `}>
                <NavLink
                    to='/' className={({ isActive }) => isActive ? 'text-orange-400' : 'default:'}>
                    <li className='p-5'>Shop</li></NavLink>
                <NavLink
                    to='/orderReview' className={({ isActive }) => isActive ? 'text-orange-400' : 'default:'}>
                    <li className='p-5'>Order Review</li></NavLink>
                <NavLink
                    to='/login' className={({ isActive }) => isActive ? 'text-orange-400' : 'default:'}>
                    <li className='p-5'>Login</li></NavLink>
            </ul> */}




        </div >
    );
};

export default Header;