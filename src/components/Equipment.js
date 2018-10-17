import React, { Component } from 'react'

class Equipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scouts: 25,
      patrols: 4
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: parseFloat(event.target.value)
    });
  }

  render() {
    let equipmentList = this.props.equipment.map(item => {
      let quantity
      switch (item.per) {
        case "scout":
          quantity = item.quantity * this.state.scouts;
          break;

        case "patrol":
          quantity = item.quantity * this.state.patrols;
          break;

        case "troop":
          quantity = item.quantity
          break;

        default:
          console.error("Unknown equipment.per value")
          break;
      };
      return (<il key={item.name}>{quantity} {item.name}</il>);
    });
    return (
      <>
        <h2>Equipment</h2>
        <form>
          <div className="form-group">
            <label for="scouts">Scouts</label>
            <input 
              type="number" 
              name="scouts"
              className="form-control" 
              id="scouts" 
              min="1"
            />
          </div>
          <div className="form-group">
            <label for="patrols">Patrols</label>
            <input 
              type="number" 
              name="patrols"
              className="form-control" 
              id="patrols" 
              min="1"
            />
          </div>
        </form>
        <ul>
          {equipmentList}
        </ul>
      </>
    );
  }
}

export default Equipment;