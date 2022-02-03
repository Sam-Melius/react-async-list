import React from 'react';

export default function PetsList({ pets }) {
  return pets.map((pet, i) => <div key={pet + i}>
    <p>{pet.type}</p>
    <p>{pet.housing}</p>
    <p>{pet.friendly}</p>
    <p>{pet.food}</p>
  </div>);
}
