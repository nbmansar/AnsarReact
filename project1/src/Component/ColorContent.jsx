import React, { useState, useRef,useEffect } from 'react';

const ColorContent = () => {
  const ref = useRef();

  const [color, setColor] = useState('');
  const [textColor, setTextColor] = useState('black');

  const handleClick = () => {
    ref.current.focus();
    const result = textColor === 'black' ? 'white' : 'black';
    setTextColor(result);
  };

  useEffect(()=>{
    alert({textColor});
  },[textColor])

  const handleInput = (val) => {
    setColor(val);
  };

  return (
    <div>
      <div className='colorcodeBox' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <div className='colorContent' style={{ width: '100%', height: '35vh', border: '2px solid black', background: color, color: textColor }}>
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
            {color}
          </div>
        </div>
        <input
          type="text"
          autoFocus
          ref={ref}
          onInput={(e) => { handleInput(e.target.value) }}
        />
        <button type="button" onClick={handleClick} style={{ width: '100%' }}>Toggle Color</button>
      </div>
    </div>
  );
};

export default ColorContent;
