import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from './NewsCart';

const NewsComponent = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h4 className='mb-4'>Dragon News Home</h4>
            <div>
                {
                    categoryNews.map(news => <NewsCart key={news._id} {...news} />)
                }
            </div>
        </div>
    );
};

export default NewsComponent;