import React from 'react';

export default function StatesList({ states }) {
  return states.map((state, i) => <div key={state + i}>
    <p>{state.name}</p>
    <p>{state.number}</p>
    <p>{state.population}</p>
    <p>{state.flower}</p>
  </div>);
}
