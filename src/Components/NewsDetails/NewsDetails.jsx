import React from 'react';
import { Col, Row } from 'react-bootstrap';
import RightSideBar from '../SharedComponents/RightSideBar/RightSideBar';
import { useLoaderData } from 'react-router-dom';
import SingleDetailsNews from './SingleDetailsNews';
import EditorsCart from './EditorsCart';

const NewsDetails = () => {
    const data = useLoaderData();
    return (
        <div>
            <Row>
                <Col lg={9} className='d-flex flex-column gap-4'>
                    <SingleDetailsNews newsDetails={data} />
                    <EditorsCart />
                </Col>
                <Col lg={3}>
                    <RightSideBar />
                </Col>
            </Row>
        </div>
    );
};

export default NewsDetails;