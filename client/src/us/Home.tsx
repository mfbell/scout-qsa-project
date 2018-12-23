import React, { Component, FunctionComponent } from 'react';
import {
  Col,
  Container,
  Input,
  Row
  } from 'reactstrap';
import { Footer, Navbar } from '../nav';
import '../scss/full-height.scss';
import backgroundImage from '../temp-imgs/cliff-bg.jpg';

export const Home: FunctionComponent = () => {
  const backgroundStyle = {
    background: `url(${backgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  return (
    <>
    <Navbar noSearch />
    <Container fluid tag="main" className="full-height" style={backgroundStyle}>
      <Row className="d-flex align-items-center full-height">
        <Col sm={1} md={2} lg={3} />
        <Col sm={10} md={8} lg={6}>
          <h1 className="text-white">Scout Activity BD</h1>
          <Input
            type="search"
            className="bg-transparent text-white"
            placeholder="Explorer – Discover – Share"
            autoFocus
          />
        </Col>
        <Col sm={1} md={2} lg={3} />
      </Row>
    </Container>
    <Footer />
    </>
  );
};
