import React, { useState } from 'react';
import './ColorChanger.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';

const ColorChanger = () => {
  let [color, setColor] = useState('white');

  const changeColor = (action) => {
    setColor(action);
  };
  
  return (
    <div className="color-changer">
      <Display displayColor={color} />
      <ButtonsPanel changeColor={changeColor} />
    </div>
  );
};

export default ColorChanger;
