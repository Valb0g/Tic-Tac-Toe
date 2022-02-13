/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Square from '../Square/Square';
import './board.css';

function Board({ click }) {
  const board = useSelector((state) => state.board);

  useEffect(() => {

  }, [board]);
  return (
    <div className="board">
      {
      board?.map((elem, index) => (
        <Square key={index} value={elem} onClick={() => click(index)} />
      ))
      }
    </div>
  );
}

export default Board;
