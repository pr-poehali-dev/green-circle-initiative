
import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Menu from './sections/Menu';
import Contacts from './sections/Contacts';

const CoffeeShop = () => {
  return (
    <div className="font-sans">
      <Header />
      <Home />
      <About />
      <Menu />
      <Contacts />
    </div>
  );
};

export default CoffeeShop;
