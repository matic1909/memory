import React from 'react';
import './Scoreboard.css';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className='scoreboard'>
      <p>Current score: {currentScore}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}

export default Scoreboard;
