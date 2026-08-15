import React from 'react';
import Login from '../Pages/Login.jsx';
import Navbar from '../Components/Navbar.jsx';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4 mb-10'>
                <Navbar></Navbar>
            </header>
            {/* <h1>Auth</h1> */}
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>

            </main>
            
        </div>
    );
};

export default AuthLayout;