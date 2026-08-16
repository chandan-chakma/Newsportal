import React from 'react';
import { Outlet, useNavigate, useNavigation } from 'react-router';
import Header from '../Components/Header.jsx';
import LatestNews from '../Components/LatestNews.jsx';
import Navbar from '../Components/Navbar.jsx';
import LeftAside from '../Components/LeftAside.jsx';
import RightAside from '../Components/RightAside.jsx';
import CategoryNews from '../Pages/CategoryNews.jsx';

const HomeLayouts = () => {
    const {state}= useNavigation()
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
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5 mt-10' >
                <aside className='col-span-3 sticky h-fit top-0'>
                    <LeftAside></LeftAside>
                </aside>

                <section className='main col-span-6'>
                    {/* <CategoryNews></CategoryNews> */}
                    {state == 'loading'? <span className="loading loading-spinner loading-xl"></span>: <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 h-fit sticky top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
            
        </div>
    );
};

export default HomeLayouts;