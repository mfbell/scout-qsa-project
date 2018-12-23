import React, { Component, FunctionComponent } from 'react';
import { Row } from 'reactstrap';

export interface IPopularActivity {
  title: string;
  url: string;
  desciption: string;
  datatime: Date;
}

export interface IProps {
  activity: IPopularActivity;
}

export const PopularActivity: FunctionComponent<IProps> = ({ activity }) => {
  return (
    <Row>
      <a href={activity.url}>
        <h6>{activity.title}</h6>
        <p className="text-secondary">{activity.desciption}</p>
        {activity.datatime.toTimeString()}
      </a>
    </Row>
  );
};
