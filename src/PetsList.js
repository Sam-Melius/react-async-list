import React from 'react';

export default function PetsList({ pets }) {
  return pets.map((pet, i) => <div className='pets' key={pet + i}>
    <p>Type: {pet.type}</p>
    <p>Housing Requirements: {pet.housing}</p>
    <p>Friendliness Level: {pet.friendly}</p>
    <p>Food: {pet.food}</p>
  </div>);
}
