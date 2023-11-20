import React, { useState } from 'react';
const initialState = [
  23, 41, 2, 9, 15, 100, 36, 72, 1, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const Example4 = () => {
  const [numbers, setNumbers] = useState(initialState);

  const removeRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const newNumbers = [...numbers];
    const removedNumber = newNumbers.splice(randomIndex, 1)[0];
    setNumbers((prevList) => {
      return prevList.filter((number) => number !== removedNumber);
    });
    if (numbers.length === 0) {
      setNumbers(initialState);
    }
  };
  return (
    <div className='flex-container'>
      <button onClick={removeRandomNumber} className='btn'>
        Remove Random Number
      </button>
      <ul>
        {React.Children.toArray(numbers.map((number) => <li>{number}</li>))}
      </ul>
    </div>
  );
};

export default Example4;
