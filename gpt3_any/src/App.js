import React from 'react';
import { Brand, CTA, Navbar } from './components';
import './App.css';
import {
  Header,
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
} from './containers';

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
