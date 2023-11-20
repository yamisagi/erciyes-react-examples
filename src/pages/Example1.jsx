import React, { useState } from 'react';

const Example1 = () => {
  const [widthHeight, setWidthHeight] = useState({
    width: 200,
    height: 200,
  });

  const handleIncrease = () => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(widthHeight.width);
    console.log(widthHeight.height);
    if (
      widthHeight.width < window.innerWidth - 300 &&
      widthHeight.height < window.innerHeight - 300
    ) {
      setWidthHeight({
        width: widthHeight.width + 10,
        height: widthHeight.height + 10,
      });
    } else {
      alert('Maximum size reached!');
      setWidthHeight({
        width: 200,
        height: 200,
      });
    }
  };
  return (
    <div className='flex-container'>
      <button onClick={handleIncrease} className='btn'>
        <span>+</span>
      </button>
      <div
        style={{
          marginTop: '20px',
          backgroundColor: 'black',
          width: `${widthHeight.width}px`,
          height: `${widthHeight.height}px`,
          borderRadius: '10px',
        }}
      ></div>
    </div>
  );
};

export default Example1;
