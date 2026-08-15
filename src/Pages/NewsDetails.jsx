import React, { useEffect, useState } from 'react';
import Header from '../Components/Header.jsx';
import RightAside from '../Components/RightAside.jsx';
import News from '../Components/News.jsx';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    useEffect(() => {
        const NewsDetails = data.find(news => news.id == id);
        setNews(NewsDetails);
    }, [data, id])

    // console.log(news)
    return (
        <div>
            <header className='py-7'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-2 gap-5'>
                <section className='cols-span-9'>
                    <News news={news}></News>
                </section>
                <aside className='cols-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;