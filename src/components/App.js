import React, { Component } from 'react';
import './App.css';
import {Sidebar, SidebarOpener} from './Sidebar.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };

    this.handleSidebarOpen = this.handleSidebarOpen.bind(this)
    this.handleSideBarClose = this.handleSideBarClose.bind(this)
  }

  handleSidebarOpen(e) {
    this.setState({isSidebarOpen: true})
  }

  handleSideBarClose(e) {
    this.setState({isSidebarOpen: false})
  }

  render() {
    return (
      <div> 
        my app text
        <SidebarOpener open={this.handleSidebarOpen}/>
        <Sidebar isOpen={this.state.isSidebarOpen} close={this.handleSideBarClose} />
      </div>
    );
  }
}

export default App;
