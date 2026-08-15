import React from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>   
                <NavLink to='/about'>About</NavLink>   
                <NavLink to='/carrer'>Carrer</NavLink>   
            </div>
            <div className='flex gap-3 items-center'>
                <img className='w-[35px] h-[35px]' src={userLogo} alt="" />
                <Link to='/auth/login' className='btn btn-primary text-xl  px-8'> Login</Link>
           
            </div>
        </div>
    );
};

export default Navbar;