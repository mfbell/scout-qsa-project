import React, { Component } from 'react';
import { NavLink } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="fluid-container bg-light text-dark py-4 px-3 px-sm-5">
        <div className="row">
          <div className="col-12 col-sm-8">
            <p className="lead">We believe in making activity planning easy, with our huge catalog of activities you can find the right one for any event, even when the weather turns bad.</p>
          </div>
          <div className="col-12 col-sm-4 order-sm-first">
            <h3>SADB</h3>
            Built by <NavLink to="/about-us" className="text-dark align-bottom">Max Bell</NavLink>
          </div>
        </div>
        <div className="row text-center m-4">
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 ml-auto my-2">
            <NavLink to="/about-us" className="text-dark">About us</NavLink>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 my-2">
           <NavLink to="/me" className="text-dark">My account</NavLink>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-2 mr-auto my-2">
           <NavLink to="/legal" className="text-dark">Legal</NavLink>
          </div>
        </div>
        <div className="row text-center text-dark-50">
          <div className="col">&copy; Scout Activity Database</div>
        </div>
      </footer>
    );
  }
}

export default Footer;