/* eslint-disable max-len */
import React from 'react';
import { Card, CardImg } from 'reactstrap';

function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Добро пожаловать в игру крестики-нолики</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
      >
        <Card style={{ padding: '10px', margin: '30px' }}>
          <CardImg src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/99/Xo_game.svg/220px-Xo_game.svg.png" alt="Card image cap" />
        </Card>
      </div>
      <h3>Правила игры</h3>
      <ul>
        <li>
          Игроки по очереди ставят на свободные клетки поля 3х3 знаки (один всегда крестики, другой всегда нолики).
        </li>
        <li>
          Первый, выстроивший в ряд 3 своих фигуры по вертикали, горизонтали или диагонали, выигрывает.
        </li>
        <li>
          Первый ход делает игрок, ставящий крестики.
        </li>
      </ul>
    </div>
  );
}

export default Home;
