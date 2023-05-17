import React from 'react';
import RightSideLogin from './RightSideLogin/RightSideLogin';
import RightSideNews from './RightSideNews/RightSideNews';
import RightSideAd from './RightSideAd/RightSideAd';

const RightSideBar = () => {
    return (
        <div className='d-flex flex-column gap-4'>
            <RightSideLogin />
            <RightSideNews />
            <RightSideAd />
        </div>
    );
};

export default RightSideBar;