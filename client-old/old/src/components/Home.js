import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';

import Navbar from './nav/Navbar';
import Footer from './nav/Footer';

import '../scss/full-height.scss';
import backgroundImage from '../temp-imgs/cliff-bg.jpg'

class Home extends Component {
  render() {
    let backgroundStyle = {
      background: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
    return (
      <>
      <Navbar noSearch />
      <Container fluid tag="main" className="full-height" style={backgroundStyle}>
        <Row className="d-flex align-items-center full-height">
          <Col sm={1} md={2} lg={3} />
          <Col sm={10} md={8} lg={6}>
            <h1 className="text-white">Scout Activity BD</h1>
            <Input type="search" className="bg-transparent text-white" placeholder="Explorer – Discover – Share" autoFocus />
          </Col>
          <Col sm={1} md={2} lg={3} />
        </Row>
      </Container>
      <Footer />
      </>
    );
  }
}

export default Home;