import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickAC, newGameAC } from '../../../redux/ac/boardAC';
import defaultBoardState from '../../../redux/state/boardState';
import Board from '../Board/Board';
import calculateWinner from '../calculateWinner/calculateWinner';
import './game.css';

function Game() {
  const emptyBoard = useSelector((state) => state.board);
  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const dispatch = useDispatch();
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : '0';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
    dispatch(clickAC(boardCopy));
  };
  const newGameHandler = () => {
    setBoard(defaultBoardState.board);
    setXIsNext(!xIsNext);
    dispatch(newGameAC(defaultBoardState));
  };

  return (
    <div className="wrapper">
      <p className="game">
        Tic Tac Toe
      </p>
      <button type="button" className="startButton" onClick={newGameHandler}>Новая игра</button>
      <Board click={handleClick} />
      <p className="game">
        {winner ? `Победитель ${winner}` : `Сейчас ходит ${xIsNext ? 'X' : '0'}`}
      </p>
    </div>
  );
}

export default Game;
