import gql from 'graphql-tag';
import React, { FunctionComponent } from 'react';
import { Query } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import { Col, Row } from 'reactstrap';
import { Image } from '../other';
import * as RiskAssessments from '../risk-assessments';
import { IUser } from '../users';
import { Equipment, IEquipment } from './Equipment';
import Instructions from './Instructions';
import Nav from './Nav';

export interface IActivity {
  title: string;
  updated: Date;
  contributors: IUser[];
  image: string;
  alt: string;
  description: string;
  instructions: string[];
  equipment: IEquipment[];
  riskAssessment: RiskAssessments.IRiskAssessment;
}

export interface IQuerry<T = {}> {
  code: string;
  success: boolean;
  message: string;
  data: T;
}

interface IData {
  getActivity: {
    activity: IActivity;
  };
}

interface IVariables {
  slug: string;
}

class ActivityQuery extends Query<IData, IVariables> {}

export const Activity: FunctionComponent<RouteComponentProps> = ({ match }) =>
  <ActivityQuery querry={gql`
    query getActivity($slug: String!) {
      title
      updated
      contributors
      image
      alt
      description
      instructions
      equipment {
        item
        quantity
        per
      }
      riskAssessment
    }
  }`} variables={{ slug: match.params.slug }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error || !data) return <p>Error :(</p>;
      const a = data.getActivity.activity;
      return (
        <Row>
          <Nav />
          <Col lg={8}>
            <header>
              <h1>{a.title}</h1>
              <p className="text-secondary">
                <i className="material-icons">update</i>
                  {a.updated.toString()}
                <i className="material-icons">person</i>
                  {a.contributors.join()}
                </p>
              <Image src={a.image} alt={a.alt} />
            </header>
            <main>
              <p className="lead">{a.description}</p>
              <Instructions instructions={a.instructions} />
              <Equipment equipment={a.equipment}/>
              <RiskAssessments.ActivitiyView riskAssessment={a.riskAssessment} />
            </main>
          </Col>
          <Col lg={4}>
            Side content
          </Col>
        </Row>
      );
    }}
  </ActivityQuery>;
