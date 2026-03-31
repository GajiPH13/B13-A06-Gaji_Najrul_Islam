import React from 'react';

const Rating = () => {
    return (
        <div className='flex justify-evenly px-15 py-4 md:px-50 md:py-15
        bg-linear-to-r from-[#4F39F6] to-[#9514FA]
        '>
            <div className='space-y-3 w-30 border-r-2 text-white md:w-60'>
                <p className=' font-bold text-4xl '>50K+</p>
                <p className=' font-[24px]'>Active Users</p>
            </div>
            <div className='space-y-3 w-30 border-r-2 text-white md:60'>
                <p className=' font-bold text-4xl '>200+</p>
                <p className=' font-[24px]'>Premium Tools</p>
            </div>
            <div className='space-y-3  text-white '>
                <p className=' font-bold text-4xl '>4.9</p>
                <p className=' font-[24px]'>Rating</p>
            </div>
        </div>
    );
};

export default Rating;