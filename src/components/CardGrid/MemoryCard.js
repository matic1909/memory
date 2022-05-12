import { useState } from 'react';
import './MemoryCard.css';

function MemoryCard({ name, number, imgUrl, handleCardClick }) {
  // track whether or not a card has been clicked
  const [clicked, setClicked] = useState(false);

  return (
    <div className='memory-card' onClick={handleCardClick} number={number}>
      <img className='memory-card-image' src={imgUrl} alt={name} />
      <h2 className='memory-card-name'>{name}</h2>
    </div>
  );
}

export default MemoryCard;
