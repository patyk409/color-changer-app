import React, { useState } from 'react';
import './ColorChanger.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';

const ColorChanger = props => {
  let [color, setColor] = useState('white');

  const changeColor = (action) => {
    if (action === 'red') {
      setColor(color = action);
    } else if (action === 'green') {
      setColor(color = action);
    } else {
      setColor(color = action);
    }
    console.log(color);
  };

  return (
    <div className="color-changer">
      <Display displayColor={color} />
      <ButtonsPanel changeColor={changeColor} />
    </div>
  );
};

export default ColorChanger;
