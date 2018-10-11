import React, { Component } from 'react';

class Sidebar extends Component {
  handleClose() {
    document.getElementById("sidebar").style.width = "0";
  }

  handleOpen() {
    document.getElementById("sidebar").style.width = "300px";
  }

  render() {
    return (
      <>
        <span className="text-white" onClick={this.handleOpen}>&#9776;</span>
        <nav class="sidebar" id="sidebar">
          <a href onClick={this.handleClose}>&times;</a>
          <a href="/about">About</a>
          <a href="/servers">Services</a>
          <a href="/clients">Clients</a>
          <a href="/contact">Contact</a>
        </nav>
      </>
    );
  }
}

export default Sidebar;