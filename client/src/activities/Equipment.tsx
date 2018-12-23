import React, { FormEvent, PureComponent } from 'react';
import {
  Badge,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row
  } from 'reactstrap';

export enum Per {
  Troop = 'troop',
  Patrol = 'patrol',
  Scout = 'scout'
}

export interface IEquipment {
  name: string;
  quantity: number;
  per: Per;
}

export interface IProps {
  equipment: IEquipment[];
}

export interface IState {
  patrols: number;
  scouts: number;
}

export class Equipment extends PureComponent<IProps, IState> {
  public readonly state: Readonly<IState> = {
    patrols: 5,
    scouts: 24
  };

  public render() {
    const equipmentList = this.props.equipment.map(item => {
      let quantity: number;
      switch (item.per) {
        case 'scout':
          quantity = item.quantity * this.state.scouts;
          break;
        case 'patrol':
          quantity = item.quantity * this.state.patrols;
          break;
        case 'troop':
          quantity = item.quantity;
          break;
        default:
          // Need to change to production solution
          console.error('Unknown equipment.per value');
          quantity = item.quantity * this.state.scouts;
          break;
      }
      return (
        <ListGroupItem key={item.name}>
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

  public handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      // Not a good solution but the only one it could find
      ...this.state,
      [e.currentTarget.name]: parseFloat(e.currentTarget.value),
    });
  }
}
