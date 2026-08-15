import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header.jsx';
import LatestNews from '../Components/LatestNews.jsx';
import Navbar from '../Components/Navbar.jsx';
import LeftAside from '../Components/LeftAside.jsx';
import RightAside from '../Components/RightAside.jsx';
import CategoryNews from '../Pages/CategoryNews.jsx';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 mt-10'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>

                <section className='main col-span-6'>
                    {/* <CategoryNews></CategoryNews> */}
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
            
        </div>
    );
};

export default HomeLayouts;