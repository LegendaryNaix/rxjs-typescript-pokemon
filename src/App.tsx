import { useEffect } from 'react';
import { rawPokemon$ } from './store';
import './App.css';

function App() {
  useEffect(() => {
    rawPokemon$.subscribe(console.log)
  }, [])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
