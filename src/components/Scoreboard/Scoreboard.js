import React from 'react';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className='scoreboard'>
      <p>Current score: {currentScore}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}

export default Scoreboard;
