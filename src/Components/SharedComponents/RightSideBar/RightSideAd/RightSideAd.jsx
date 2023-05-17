import React from 'react';
import AdBg from "../../../../assets/bg.png"
import { Button } from 'react-bootstrap';

const RightSideAd = () => {
    return (
        <div className='position-relative'>
            <img src={AdBg} className='img-fluid w-100' alt="" />
            <div className='text-center position-absolute text-light adText'>
                <h3 className='fs-2'>
                    Create an Amazing Newspaper
                </h3>
                <p className='fs-5'>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </p>
                <Button variant='danger'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightSideAd;