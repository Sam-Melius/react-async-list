import React from 'react';

export default function DrumsList({ drums }) {
  return drums.map((drum, i) => <div className='drums' key={drum + i}>
    <p>Brand: {drum.brand}</p>
    <p>Type: {drum.type}</p>
    <p>Color: {drum.color}</p>
    <p>Pieces: {drum.size}</p>
  </div>);
}
