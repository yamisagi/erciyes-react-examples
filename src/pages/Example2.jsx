import React, { useState } from 'react';

const Example2 = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);
  // unique random number generator

  const handleAddRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      setRandomNumbers((prevList) => prevList.concat(randomNumber));
      console.log(randomNumbers.length);
    } else if (randomNumbers.length >= 32) {
      alert('Maximum number of numbers reached!');
      setRandomNumbers([]);
    } else {
      return;
    }
  };
  return (
    <div className='flex-container'>
      <button className='btn' onClick={handleAddRandomNumber}>
        Add Random Number
      </button>
      <ul>
        {randomNumbers.map((randomNumber) => (
          <li key={randomNumber}>{randomNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example2;
