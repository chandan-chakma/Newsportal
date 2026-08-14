import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header.jsx';
import LatestNews from '../Components/LatestNews.jsx';
import Navbar from '../Components/Navbar.jsx';
import LeftAside from '../Components/LeftAside.jsx';

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
            <main>
                <aside>
                    <LeftAside></LeftAside>
                </aside>

                <section className='main'>
                    <Outlet></Outlet>
                </section>

                <section className='right-nav'></section>
            </main>
            
        </div>
    );
};

export default HomeLayouts;