import React, { FunctionComponent } from 'react';

export interface IRisk {
  risk: string;
  affects: string;
  action: string;
  severity: number;
  likelihood: number;
  rating: number;
}

export interface IProps {
  risk: IRisk;
}

export const View: FunctionComponent<IProps> = ({ risk }) => {
  return (
    <tr className={risk.rating === 2 ? 'table-danger' : undefined}>
        <td scope="row">{risk.risk}</td>
        <td>{risk.affects}</td>
        <td>{risk.action}</td>
        <td>{risk.severity}</td>
        <td>{risk.likelihood}</td>
        <td>{risk.rating}</td>
    </tr>
  );
};
