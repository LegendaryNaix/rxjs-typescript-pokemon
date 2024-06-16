import { useState, useEffect, useMemo } from "react";
import { pokemonWithPower$, Pokemon } from "./store";
import "./App.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const sub = pokemonWithPower$.subscribe(setPokemon);
    return () => sub.unsubscribe();
  }, []);

  const filteredPokemon = useMemo(() => {
    return pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [pokemon, search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>{filteredPokemon.map(pokemon => (
        <div>
          <strong>{pokemon.name}</strong> - {pokemon.power}
        </div>
      ))}</div>
    </div>
  );
};

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <Search />
    </div>
  );
}

export default App;
