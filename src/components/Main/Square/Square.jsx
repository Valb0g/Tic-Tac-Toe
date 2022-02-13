/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './square.css';

function Square(props) {
  return (
    <button type="button" className="square" onClick={props.onClick}>{props.value}</button>
  );
}

export default Square;
