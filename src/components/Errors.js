import React from 'react'

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

export { NoMatch };