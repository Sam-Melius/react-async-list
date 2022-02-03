import React from 'react';

export default function DrumsList({ drums }) {
  return drums.map((drum, i) => <div key={drum + i}>
    <p>{drum.brand}</p>
    <p>{drum.type}</p>
    <p>{drum.color}</p>
  </div>);
}
