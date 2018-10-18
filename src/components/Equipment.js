import React, { Component } from 'react';
import { 
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText, 
  Badge,
  Form, 
  FormGroup, 
  Label, 
  Input,
  FormText,
  Col,
  Row
} from 'reactstrap';

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
      if (isNaN(quantity)) {quantity = ""};
      return (
        <ListGroupItem>
          <ListGroupItemHeading>
            <Badge pill>{quantity}</Badge> {item.name}
          </ListGroupItemHeading>
          <ListGroupItemText>
            {item.quantity} per {item.per}.
          </ListGroupItemText>
        </ListGroupItem>
      );
    });
    return (
      <>
        <h2>Equipment</h2>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="scouts">Scouts</Label>
                <Input 
                  type="number" 
                  name="scouts"
                  className="form-control" 
                  id="scouts" 
                  min="1"
                  placeholder="24"
                  required
                  value={this.state.scouts}
                  onChange={this.handleInputChange}
                />
                <FormText>Enter your number of Scouts</FormText>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="patrols">Patrols</Label>
                <Input 
                  type="number" 
                  name="patrols"
                  className="form-control" 
                  id="patrols" 
                  min="1"
                  placeholder="4"
                  required
                  value={this.state.patrols}
                  onChange={this.handleInputChange}
                />
                <FormText>Enter your number of Patrols</FormText>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <ListGroup>
          {equipmentList}
        </ListGroup>
      </>
    );
  }
}

export default Equipment;