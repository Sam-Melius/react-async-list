
import './App.css';
import { useState, useEffect } from 'react';
import { getDrums, getPets, getGames } from './services/fetch-utils';
import DrumsList from './DrumsList';
import PetsList from './PetsList';
import GamesList from './GamesList';

function App() {

  const [drums, setDrums] = useState([]);
  const [pets, setPets] = useState([]);
  const [games, setGames] = useState([]);

  async function fetchDrums() {
    const data = await getDrums();
    setDrums(data);
  }

  async function fetchPets() {
    const data = await getPets();
    setPets(data);
  }

  async function fetchGames() {
    const data = await getGames();
    setGames(data);
  }

  useEffect(() => {
    fetchDrums();
    fetchPets();
    fetchGames();
  }, []);

  return (
    <div className="App">
      <h1>Drums:</h1>
      <DrumsList drums={drums} />
      <h1>Pets:</h1>
      <PetsList pets={pets} />
      <h1>Games:</h1>
      <GamesList games={games} />
      
    </div>
  );
}

export default App;
