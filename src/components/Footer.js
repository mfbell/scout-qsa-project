import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="fluid-container bg-secondary text-light py-4 px-3 px-sm-5">
        <div className="row">
          <div className="col-12 col-sm-8">
            <p className="lead">We believe in making activity planning easy, with our huge catalog of activities you can find the right one for any event, even when the weather turns bad.</p>
          </div>
          <div className="col-12 col-sm-4 order-sm-first">
            <h3>SADB</h3>
            Built by <a href="/about-us#creators" className="text-white align-bottom">Max Bell</a>
          </div>
        </div>
        <div className="row text-center m-4">
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 ml-auto my-2">
            <a href="/about-us" className="text-white">About us</a>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 my-2">
           <a href="/me" className="text-white">My account</a>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 mr-auto my-2">
           <a href="/legal" className="text-white">Legal</a>
          </div>
        </div>
        <div className="row text-center text-white-50">
          <div className="col">&copy; Scout Activity Database</div>
        </div>
      </footer>
    );
  }
}

export default Footer;