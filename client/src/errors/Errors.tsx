import React, { FunctionComponent } from 'react';
import { Alert } from 'reactstrap';

export interface IErrorProps {
  error: Error;
  index: number;
}

export const Error: FunctionComponent<IErrorProps> = ({error, index}) => {
  return (
    <Alert color="danger" key={index}>
      <h3>{error.name}</h3>
      <p>{error.message}</p>
    </Alert>
  );
};

export interface IErrorsProps {
  errors: Error[];
}

export const Errors: FunctionComponent<IErrorsProps> = ({errors}) => {
  const errorList = errors.map((error, index) =>
    <Error error={error} index={index} />);
  return <div>{errorList}</div>;
};
