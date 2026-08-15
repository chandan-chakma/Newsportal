import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard.jsx';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(data);
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        }
        else if (id == '1') {
            const filterNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filterNews);
            // return;
        }
        else {
            const filterNews = data.filter(news => news.category_id == id);
            // console.log(filterNews);
            setCategoryNews(filterNews)    
        }
    }, [data, id]);


    return (
        <div>
            <h2>Categoru news{id}</h2>
            <p>{categoryNews.length}</p>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;