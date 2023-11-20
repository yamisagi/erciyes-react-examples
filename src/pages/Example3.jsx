import React, { useState } from 'react';

const Example3 = () => {
  const [color, setColor] = useState([]);

  const handleColor = () => {
    const randomColor = Math.floor(Math.random() * 1000).toString(16);
    setColor((prevList) => prevList.concat(randomColor));
    console.log(color);
  };
  return (
    <div className='flex-container'>
      <button onClick={handleColor} className='btn'>
        Change Background
      </button>
      <div
        className='card'
        style={{
          marginTop: '20px',
          backgroundColor: `#${color[color.length - 1]}`,
          borderRadius: '10px',
        }}
      ></div>
    </div>
  );
};

export default Example3;
