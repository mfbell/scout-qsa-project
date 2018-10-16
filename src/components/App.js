import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Activity from './Activity.js'

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Activity />
        <Footer />
      </>
    );
  }
}

export default App;
