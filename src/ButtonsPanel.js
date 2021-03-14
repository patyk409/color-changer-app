import React from 'react';
import './ButtonsPanel.css';

const ButtonsPanel = props => {
  return (
    <div className="buttons-panel">
      <button className="btn red" onClick={() => {props.changeColor('red')}}>red</button>
      <button className="btn green" onClick={() => {props.changeColor('green')}}>green</button>
      <button className="btn blue" onClick={() => {props.changeColor('blue')}}>blue</button>
    </div>
  );
};

export default ButtonsPanel;
