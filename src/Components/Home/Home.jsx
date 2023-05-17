import React from 'react';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import NewsComponent from './NewsComponent/NewsComponent';
import { Col, Row } from 'react-bootstrap';
import RightSideBar from '../SharedComponents/RightSideBar/RightSideBar';

const Home = () => {
    return (
        <div>
            <Row>
                <Col lg={3}>
                    <LeftSideBar />
                </Col>
                <Col lg={6}>
                    <NewsComponent />
                </Col>
                <Col lg={3}>
                    <RightSideBar />
                </Col>
            </Row>
        </div>
    );
};

export default Home;