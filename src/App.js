import f1Drivers from './util/drivers';
import './App.css';
import CardGrid from './components/CardGrid/CardGrid';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { useState } from 'react';

function App() {
  const [drivers, setDrivers] = useState(f1Drivers);
  const [clickedDrivers, setClickedDrivers] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

  const handleCardClick = (e) => {
    const selectedDriver = drivers.find(
      (driver) => driver.number === e.target.parentNode.getAttribute('number')
    );
    if (clickedDrivers.includes(selectedDriver)) {
      console.log('Already clicked this one');
      setCurrentScore(0);
      setClickedDrivers([]);
    } else {
      setClickedDrivers(clickedDrivers.concat(selectedDriver));
      setCurrentScore(currentScore + 1);
    }
  };

  return (
    <div className='App'>
      <h1 className='title'>F1 Memory Game</h1>
      <p className='subtitle'>
        Click on each driver, but don't click on any driver more than once
      </p>
      <Scoreboard currentScore={currentScore} />
      <CardGrid drivers={drivers} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
