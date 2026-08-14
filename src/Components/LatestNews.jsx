import React from 'react';

import * as MarqueeModule from 'react-fast-marquee';

const Marquee = MarqueeModule.default.default;

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 gap-5 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2 rounded-xl'>Latest</p>
            <Marquee pauseOnHover={true} className=''>
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;