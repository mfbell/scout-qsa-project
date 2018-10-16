import React, { Component } from 'react'

class Equipment extends Component {
  render() {
    return (
      <>
        <h2>Equipment</h2>
        <form>
          <div className="form-group">
            <label for="young-people">Young people</label>
            <input type="number" className="form-control" id="young-people" min="1" value="25" />
          </div>
          <div className="form-group">
            <label for="patrols">Patrols</label>
            <input type="number" className="form-control" id="patrols" min="1" value="4" />
          </div>
        </form>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
          <li>Nunc dignissim risus id metus.</li>
          <li>Cras ornare tristique elit.</li>
          <li>Vivamus vestibulum ntulla nec ante.</li>
          <li>Praesent placerat risus quis eros.</li>
          <li>Fusce pellentesque suscipit nibh.</li>
          <li>Integer vitae libero ac risus egestas placerat.</li>
          <li>Vestibulum commodo felis quis tortor.</li>
          <li>Ut aliquam sollicitudin leo.</li>
          <li>Cras iaculis ultricies nulla.</li>
          <li>Donec quis dui at dolor tempor interdum.</li>
        </ul>
      </>
    );
  }
}

export default Equipment;