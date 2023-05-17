import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../../assets/qZone1.png";
import qZone2 from "../../../../assets/qZone2.png";
import qZone3 from "../../../../assets/qZone3.png";

const RightSideNews = () => {
    return (
        <>
            <div>
                <h4 className='mb-3'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='fs-4' /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='fs-4' /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='fs-4' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='border py-3 px-2'>
                <h4 className='mb-3'>Q-Zone</h4>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </>
    );
};

export default RightSideNews;