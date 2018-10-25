import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withAuth } from '@okta/okta-react';

import ActivityNav from './ActivityNav.js';
import Image from '../Image.js';
import Instructions from '../Instructions.js';
import Equipment from '../Equipment.js';
import RiskAssessment from './ActivityRiskAssessement.js';
import { Loading } from '../Errors.js';


const Activity = withAuth(class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: null,
      errors: []
    };
  }

  async fetchJSON(url) {
    return fetch(url).then(res => res.json())
  }

  async componentDidMount() {
    try {
      const res = await fetch(`/api/activities/${this.props.match.params.slug}`, {
        headers: {
          authorization: 'Bearer ' + await this.props.auth.getAccessToken()
        }
      });
      const data = await res.json()
      this.setState({ activity: data.activity })
    } catch (err) {
      console.error(err);
      this.setState({errors: this.state.errors.concat(err)})
    }
  }

  render() {
    let activity = this.state.activity;
    if (!activity) {return <Loading />};
    return (
      <Container>
        <ActivityNav />
        <Row>
          <Col lg={8}>
            <header>
              <h1>{activity.title}</h1>
              <p className="text-secondary"><i className="material-icons">update</i> {activity.updated.toString()} <i className="material-icons">person</i> {activity.contributors.join()}</p>
              <Image src={activity.image} alt={activity.alt} />
            </header>
            <main>
              <p className="lead">{activity.description}</p>
              <Instructions instructions={activity.instructions} />
              <Equipment equipment={activity.equipment}/>
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
});

function Create() {
  return "Create activity page";
}

export { Activity, Create };