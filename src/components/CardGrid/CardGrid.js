import './CardGrid.css';
import MemoryCard from './MemoryCard';

function CardGrid({ drivers, handleCardClick }) {
  return (
    <div className='card-grid'>
      {drivers.map((driver) => (
        <MemoryCard
          key={driver.number}
          number={driver.number}
          name={driver.name}
          imgUrl={driver.imgUrl}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default CardGrid;
