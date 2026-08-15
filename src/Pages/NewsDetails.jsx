import React from 'react';
import Header from '../Components/Header.jsx';
import RightAside from '../Components/RightAside.jsx';

const NewsDetails = () => {
    return (
        <div>
            <header className='py-7'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-2'>
                <section className='cols-span-9'>
                    <h1></h1>
                </section>
                <aside className='cols-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;