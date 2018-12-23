import React, { Component, FunctionComponent } from 'react';
import { Link } from '../Link';

export const Links: FunctionComponent = () => {
    return (<>
      <Link to="/sign-in">Sign in</Link>
      <Link
        to="/sign-up"
        className="btn btn-outline-primary">
          Sign up
      </Link>
    </>);
};
