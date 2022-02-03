import React from 'react';

export default function GamesList({ games }) {
  return games.map((game, i) => <div key={game + i}>
    <p>{game.name}</p>
    <p>{game.system}</p>
    <p>{game.difficulty}</p>
    <p>{game.multiplayer}</p>
  </div>);
}
