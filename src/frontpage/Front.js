import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../containers';
import { CTA, Brand, Navbar } from '../frontpage';

import '../App.css';

const Front = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA/>
    {/* <Blog /> */}
    <Footer />
  </div>
);

export default Front;