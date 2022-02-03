import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getDrums } from './services/fetch-utils';

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
      
    </div>
  );
}

export default App;
