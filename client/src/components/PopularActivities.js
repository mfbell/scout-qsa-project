import React, { Component } from 'react';

class PopularActivities extends Component {
  render() {
    return (
      <div className="col-12 col-lg-4">
        <div className="bg-secondary-light px-4 py-3 mb-3">
          <h4 className="mb-3">Popular activities</h4>
          <a href="#">
            <b>Backwood cooking: pancakes</b>
            <p className="text-secondary">In patrols, Scouts build small cooking fires in the woods which they use to cook pancakes on.</p>
            <i className="material-icons">update</i> 19th Sept 2018
          </a>
          <a href="#">
            <b>Beach clean and BBQ</b>
            <i className="material-icons">update</i> 18th Sept 2018
          </a>
          <a href="#">
            <b>Rope bridge building</b>
            <i className="material-icons">update</i> 19th Sept 2018
          </a>
        </div>
      </div>
    );
  }
}

export default PopularActivities;