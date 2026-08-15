import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';


const News = ({ news }) => {
    // console.log(news)
    const { details, image_url, title}=news
    
    return (
        <div>
            <h2 className='font-bold mb-2'>Dragon News</h2>
            <div className='space-y-5'>
                <img className='w-full' src={image_url} alt="" />
                <h1 className='font-bold text-xl'>{title}</h1>
                <p>{details}</p>
            </div>
            <Link to={`/category/${news.category_id
}`} className='btn btn-secondary mt-3 p-3'><FaArrowLeftLong />All news in this category</Link>
        </div>
    );
};

export default News;