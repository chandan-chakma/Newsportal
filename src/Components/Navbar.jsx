import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider.jsx';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
    }
    return (
        <div className='flex justify-between items-center'>
            <div> { user && user.email}</div>
            <div className='flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>   
                <NavLink to='/about'>About</NavLink>   
                <NavLink to='/carrer'>Carrer</NavLink>   
            </div>
            <div className='flex gap-3 items-center'>
                <img className='w-[35px] h-[35px]' src={userLogo} alt="" />
                {!user ? <Link to='/auth/login' className='btn btn-primary text-xl  px-8'> Login</Link> : <button onClick={handleLogout} className='btn btn-primary text-xl px-8'>LogOut</button>}
           
            </div>
        </div>
    );
};

export default Navbar;