import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='m-1'>Journalism Without Fear or Favour</p>
                <p className='m-1'>{moment().format("dddd, MMMM D, YYYY, h:mm a")}</p>
            </div>
            <div className='d-flex gap-3 bg-opacity-10 latestNews p-2 rounded'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={80} className='fs-5'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-4">
                            <NavLink to="/" className="text-decoration-none text-dark fs-5">Home</NavLink>
                            <NavLink to="/" className="text-decoration-none text-dark fs-5">About</NavLink>
                            <NavLink to="/" className="text-decoration-none text-dark fs-5">Career</NavLink>
                        </Nav>
                        <Nav className='align-items-center gap-2'>
                            <Link to="/login">
                                <Button variant='dark'>Login</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;