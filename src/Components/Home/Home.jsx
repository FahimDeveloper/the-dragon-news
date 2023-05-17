import React from 'react';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import { Col, Row } from 'react-bootstrap';
import RightSideBar from '../SharedComponents/RightSideBar/RightSideBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Row>
                <Col lg={3}>
                    <LeftSideBar />
                </Col>
                <Col lg={6}>
                    <Outlet />
                </Col>
                <Col lg={3}>
                    <RightSideBar />
                </Col>
            </Row>
        </div>
    );
};

export default Home;