import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e) {
        this.props.close(e);
    }

    render() {
        return (
            <nav class="sidebar" style={{width: this.props.isOpen ? "250px" : "0"}}>
                <a href onClick={this.handleClose}>&times;</a>
                <a href="/about">About</a>
                <a href="/servers">Services</a>
                <a href="/clients">Clients</a>
                <a href="/contact">Contact</a>
            </nav>
        );
    }
}

class TextButton extends Component {
    /* Text Button
        Props: 
        open - callback on click

        children - text to display
    */
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.open(e)
    }

    render() {
        return <span onClick={this.handleClick}>{this.props.children}</span>
    }
}

class SidebarOpener extends Component {
    /* Burger Button
        Props: open - function to call on click
    */

    render() {
        return <TextButton open={this.props.open}>&#9776;</TextButton>
    }
}

export {Sidebar, SidebarOpener, TextButton}