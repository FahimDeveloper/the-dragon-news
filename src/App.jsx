import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/SharedComponents/Header/Header';
import Footer from './Components/SharedComponents/Footer/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div className='py-5'>
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    </div>
  );
};

export default App;