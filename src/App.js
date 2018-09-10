import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueNfo from './components/venueNfo/index';

import Highlight from './components/Highlights/index';
import Pricing from './components/Pricing/index';
import Location from './components/Location/index';
import Footer from './components/header_footer/Footer';

import {Element} from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px"}}>
        <Header/>
        <Element name="about">
          <Featured />
        </Element>

        <Element name="information">
          <VenueNfo />
        </Element>

        <Element name="highlight">
          <Highlight />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>
        

        <Element name="location">
          <Location />
        </Element>
        
        
        
       
        <Footer />
      </div>
    );
  }
}

export default App;
