import React, { Component, FunctionComponent } from 'react';
import { Table } from 'reactstrap';
import * as Risk from './risk';

export interface IRiskAssessment {
  title: string;
  risks: Risk.IRisk[];
}

export interface IProps {
  riskAssessment: IRiskAssessment;
}

export const View: FunctionComponent<IProps> = ({ riskAssessment }) => {
  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>Risk</th>
          <th>Affects</th>
          <th>Action</th>
          <th>Severity</th>
          <th>Likelihood</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {riskAssessment.risks.map(risk =>
          <Risk.View risk={risk} />
        )}
      </tbody>
    </Table>
  );
};

export const ActivitiyView: FunctionComponent<IProps> = ({ riskAssessment }) => {
  return (
    <>
      <h2>Risk Assessment</h2>
      <View riskAssessment={riskAssessment} />
    </>
  );
};
