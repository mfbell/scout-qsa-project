import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <main className="fluid-container">
        <div className="row align-items-center">
          <div className="col-0 col-md-2" />
          <div className="col-12 col-md-8">
            <h1 className="">Scout Activity BD</h1>
            <input type="text" className="search" id="search" placeholder="Explorer – Discover – Share" autofocus />
          </div>
          <div className="col-0 col-md-2" />
        </div>
      </main>
    );
  }
}

export default Home;