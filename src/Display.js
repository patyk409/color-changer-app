import React from 'react';
import './Display.css';

const Display = props => {
  return (
    <div className="sentence">
      <p className={props.displayColor}>click the button to change color of this sentence</p>
    </div>
  );
};

export default Display;
