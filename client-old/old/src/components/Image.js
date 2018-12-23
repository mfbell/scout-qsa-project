import React, { Component } from 'react'

class Image extends Component {
  render() {
    let caption
    if (this.props.alt) {
      caption = (
        <div className="card-body bg-dark text-light py-3">
          <p className="card-text">{this.props.alt}</p>
        </div>
      );
    }
    return (
      <div className="card mb-3">
        <img className="img-fluid" src={this.props.src} alt={this.props.alt} />
        {caption}
      </div>
    );
  }
}

export default Image;