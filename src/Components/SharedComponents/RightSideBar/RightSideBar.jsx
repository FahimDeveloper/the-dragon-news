import React, { useContext } from 'react';
import RightSideLogin from './RightSideLogin/RightSideLogin';
import RightSideNews from './RightSideNews/RightSideNews';
import RightSideAd from './RightSideAd/RightSideAd';
import { AuthContext } from '../../../provider/AuthProvider';

const RightSideBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='d-flex flex-column gap-4'>
            {user ? "" : <RightSideLogin />}
            <RightSideNews />
            <RightSideAd />
        </div>
    );
};

export default RightSideBar;