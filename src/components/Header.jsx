import React, { useState } from 'react';
import logo from '../../src/assets/images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='max-w-[1240px] mx-auto h-[80px] bg-[#1C2B35] flex justify-between items-center  px-[60px]'>
            <div>
                <img src={logo} alt="" />
            </div>
            {
                openMenu ?
                <XMarkIcon onClick={()=>setOpenMenu(!openMenu)} className='w-6 text-white md:hidden'/>
                :
                <Bars3BottomRightIcon onClick={()=>setOpenMenu(!openMenu)} className='w-6 text-white md:hidden'/>
            }

            
           

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
            <ul className={`text-white w-full h-1/3 md:hidden fixed bg-black top-[80px]
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
            </ul>




        </div>
    );
};

export default Header;