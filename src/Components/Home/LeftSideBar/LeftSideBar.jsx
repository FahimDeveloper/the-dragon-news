import React from 'react';
import LeftSideNews from './LeftSideNews/LeftSideNews';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const LeftSideBar = () => {
    return (
        <div>
            <LeftSideNav />
            <LeftSideNews />
        </div>
    );
};

export default LeftSideBar;