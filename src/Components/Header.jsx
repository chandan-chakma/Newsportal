import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='mt-5'>
            {/* <h1>Header</h1> */}
            {/* {import.meta.env.VITE_SOME_KEY} */}
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-center text-accent my-3'>Journalism Without Fear or Favour</p>
            <h2 className='text-center text-smibold text-accent'>{format(new Date(), 'EEEE, MMMM dd, yyyy')}</h2>
        </div>
    );
};

export default Header;