import React from 'react';
import Header from './Components/SharedComponents/Header/Header';
import Footer from './Components/SharedComponents/Footer/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='py-5'>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default App;