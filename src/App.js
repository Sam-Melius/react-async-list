import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getDrums } from './services/fetch-utils';
import DrumsList from './DrumsList';

function App() {

  const [drums, setDrums] = useState([]);

  async function fetchDrums() {
    const data = await getDrums();
    setDrums(data);
  }

  useEffect(() => {
    fetchDrums();
  }, []);

  return (
    <div className="App">
      <h1>Drums:</h1>
      <DrumsList drums={drums} />
      
    </div>
  );
}

export default App;
