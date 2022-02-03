
import './App.css';
import { useState, useEffect } from 'react';
import { getDrums, getPets, getGames, getStates } from './services/fetch-utils';
import DrumsList from './DrumsList';
import PetsList from './PetsList';
import GamesList from './GamesList';
import StatesList from './StatesList';

function App() {

  const [drums, setDrums] = useState([]);
  const [pets, setPets] = useState([]);
  const [games, setGames] = useState([]);
  const [states, setStates] = useState([]);

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

  async function fetchStates() {
    const data = await getStates();
    setStates(data);
  }

  useEffect(() => {
    fetchDrums();
    fetchPets();
    fetchGames();
    fetchStates();
  }, []);

  return (
    <div className="App">We have what you are looking for!
      <h1>Drums:</h1>
      <DrumsList drums={drums} />
      <h1>Pets:</h1>
      <PetsList pets={pets} />
      <h1>Games:</h1>
      <GamesList games={games} />
      <h1>States:</h1>
      <StatesList states={states} />
      
    </div>
  );
}

export default App;
