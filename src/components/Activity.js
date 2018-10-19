import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ActivityNav from './ActivityNav.js';
import Image from './Image.js';
import Instructions from './Instructions.js';
import Equipment from './Equipment.js';
import RiskAssessment from './ActivityRiskAssessement.js'
import { Loading } from './Errors.js'

import activityImage from '../temp-imgs/bw-cooking.jpg'

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      activity: {}
    };
  }

  async fetchJSON(url) {
    return fetch(url).then(res => res.json())
  }

  componentDidMount() {
  /*  fetch(`/api/activity/${this.props.match.params.slug}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          activty: result
        });
      }, 
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }*/
  let activity = {
    title: "Campfire pancakes",
    updated: new Date(),
    contributors: [
      "Max Bell", 
      "Alex North"
    ],
    image: activityImage,
    alt: "1st Ivybridge Victoria Scout Troop cooking sausages in the woods",
    description: "In patrols, Scouts build small cooking fires in the woods which they use to cook pancakes on.",
    instructions: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Aliquam tincidunt mauris eu risus.",
      "Vestibulum auctor dapibus neque.",
      "Nunc dignissim risus id metus.",
      "Cras ornare tristique elit.",
      "Vivamus vestibulum ntulla nec ante.",
      "Praesent placerat risus quis eros.",
      "Fusce pellentesque suscipit nibh.",
      "Integer vitae libero ac risus egestas placerat.",
      "Vestibulum commodo felis quis tortor.",
      "Ut aliquam sollicitudin leo.",
      "Cras iaculis ultricies nulla.",
      "Donec quis dui at dolor tempor interdum."
    ],
    equipment: [
      {name: "Broom handles", quantity: 5, per: "scout"},
      {name: "Bean bags", quantity: 1, per: "scout"},
      {name: "meters of tape", quantity: 4, per: "patrol"},
      {name: "bandages", quantity: 2, per: "troop"},
      {name: "regrets", quantity: 7, per: "patrol"}
    ],
    riskAssessment: null
  };
  this.setState({
    isLoaded: true, 
    activity
  });
  }

  render() {
    if (!this.state.isLoaded) {return <Loading />};
    return (
      <Container>
        <ActivityNav />
        <Row>
          <Col lg={8}>
            <header>
              <h1>{this.state.activity.title}</h1>
              <p className="text-secondary"><i className="material-icons">update</i> {this.state.activity.updated.toString()} <i className="material-icons">person</i> {this.state.activity.contributors.join()}</p>
              <Image src={this.state.activity.image} alt={this.state.activity.alt} />
            </header>
            <main>
              <p className="lead">{this.state.activity.description}</p>
              <Instructions instructions={this.state.activity.instructions} />
              <Equipment equipment={this.state.activity.equipment}/>
              <RiskAssessment />
            </main>
          </Col>
          <Col lg={4}>
            Side content
          </Col>
        </Row>
      </Container>
    );
  };
}

function Create() {
  return "Create activity page";
}

export { Activity, Create };