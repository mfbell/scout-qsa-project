import React, { FunctionComponent } from 'react';
import { Col } from 'reactstrap';
import { IPopularActivity, PopularActivity } from './PopularActivity';

export interface IProps {
  activities: IPopularActivity[];
}

export const PopularActivities: FunctionComponent<IProps> = ({ activities }) => {
  return (
    <Col lg={4}>
      <h4 className="mb-3">Popular activities</h4>
      {activities.map(activity =>
        <PopularActivity activity={activity} />
      )}
    </Col>
  );
};
