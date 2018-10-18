import React, { Component } from 'react';
import { Container } from 'reactstrap';

import ActivityNav from './ActivityNav.js';
import Image from './Image.js';
import Equipment from './Equipment.js';
import RiskAssessment from './ActivityRiskAssessement.js'

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
    fetch(`/api/activity/${this.props.match.params.slug}`)
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
  }

  render() {
    let equipment = [
      {name: "Broom handles", quantity: 5, per: "scout"},
      {name: "Bean bags", quantity: 1, per: "scout"},
      {name: "meters of tape", quantity: 4, per: "patrol"},
      {name: "bandages", quantity: 2, per: "troop"},
      {name: "regrets", quantity: 7, per: "patrol"}
    ];
    let main = <main />
    return (
      <Container>
        <ActivityNav />
        <heading>
          <h1>{this.props.match.params.slug}</h1>
          <p class="text-secondary"><i class="material-icons">update</i> 19th Sept 2018 <i class="material-icons">person</i> Max Bell, John Smith</p>
          <Image src="/imgs/bw-cooking.jpg" alt="1st Ivybridge Victoria Scout Troop cooking sausages in the woods" />
        </heading>
        <main>
          <p class="lead">In patrols, Scouts build small cooking fires in the woods which they use to cook pancakes on.</p>
          <h2>Instructions</h2>
          <p>Vestibulum volutpat fermentum justo et dictum. Quisque rhoncus turpis ac elit scelerisque imperdiet. In eget tellus mauris. Donec hendrerit mi et scelerisque semper. Cras pulvinar elementum laoreet. Donec fermentum, magna eget feugiat efficitur, metus libero elementum arcu, sagittis blandit odio ligula id ligula. Proin massa mauris, finibus a mauris a, imperdiet tincidunt ante. Maecenas aliquam ut magna tempus accumsan. Curabitur erat diam, placerat quis metus quis, hendrerit congue neque. Nullam commodo sapien et sem fermentum, sit amet vestibulum augue aliquet. Nam eros lacus, egestas ut sodales eu, sollicitudin a justo. In sapien tellus, egestas ac mauris et, mattis malesuada mauris. Nulla diam justo, ultricies ac consectetur ac, fringilla nec ipsum. Cras ac blandit risus, id volutpat lacus. Duis et diam ligula. Phasellus eu nisi vitae tellus pharetra egestas.</p>
          <Equipment equipment={equipment} />
          <RiskAssessment />
        </main>
      </Container>
    );
  }
}

function Create() {
  return "Create activity page";
}

export { Activity, Create };