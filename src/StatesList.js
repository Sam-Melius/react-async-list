import React from 'react';

export default function StatesList({ states }) {
  return states.map((state, i) => <div className='states' key={state + i}>
    <p>Name: {state.name}</p>
    <p>State #{state.number}</p>
    <p>Population: {state.population}</p>
    <p>State Flower: {state.flower}</p>
  </div>);
}
