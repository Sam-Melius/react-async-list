import React from 'react';

export default function GamesList({ games }) {
  return games.map((game, i) => <div className='games' key={game + i}>
    <p>Name: {game.name}</p>
    <p> System: {game.system}</p>
    <p>{game.difficulty}</p>
    <p>Multiplayer Compatibility: {game.multiplayer}</p>
  </div>);
}
