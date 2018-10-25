import React from 'react';

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
  return (<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
}

export { NoMatch, Loading };