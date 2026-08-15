import React from 'react';
import swimImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playImg from '../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-300 my-5 p-3'>
            <h2 className='font-bold my-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img src={swimImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;