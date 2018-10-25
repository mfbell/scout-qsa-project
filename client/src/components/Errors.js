import React from 'react';
import { Alert } from 'reactstrap';

import '../scss/loader.css';

function NoMatch() {
  return (
    <>
      <h1>Where's Timmy gone? We've lost Timmy!</h1>
      <p>404 Error: Can't find Timmy, time to fill out some paperwork...</p>
      <form>
        <label for="search">Search for Timmy</label>
        <input type="search" id="search"></input>
      </form>
    </>
  )
}

function Loading() {
  return (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
}

function Errors(props) {
  let errors = props.errors.map((error, index) => {
    return (
      <Alert color="danger" key={index}>
        <h3>{error.name}</h3>
        <p>{error.message}</p>
      </Alert>
    );
  })
  return <div>{errors}</div>
}

export { NoMatch, Loading, Errors };