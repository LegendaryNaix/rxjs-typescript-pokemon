import { useState, useMemo, useCallback } from "react";
import { pokemon$, Pokemon, selected$, deck$ } from "./store";
import "./App.css";
import { useObservableState } from "observable-hooks";

const Deck = () => {
  const deck = useObservableState(deck$, []);
  return (
    <div>
      <h4>Deck</h4>
      <div>
        {deck.map((p: Pokemon) => (
          <div key={p.id} style={{ display: "flex" }}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              alt={p.name}
            />
            <div>
              <div>{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Search = () => {
  const [search, setSearch] = useState("");
  const pokemon = useObservableState(pokemon$, []);

  const handleCheckboxChange = useCallback((pokemonId: number) => {
    if (selected$.value.includes(pokemonId)) {
      selected$.next(selected$.value.filter((id) => id !== pokemonId));
    } else {
      selected$.next([...selected$.value, pokemonId]);
    }
  }, []);


  const filteredPokemon = useMemo(() => {
    return pokemon.filter((p: Pokemon) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [pokemon, search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredPokemon.map((pokemon: Pokemon) => (
          <div key={pokemon.name}>
            <input
              type="checkbox"
              checked={pokemon.selected}
              onChange={() => handleCheckboxChange(pokemon.id)}
            />
            <strong>{pokemon.name}</strong> - {pokemon.power}
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <Search />
      <Deck />
    </div>
  );
}

export default App;
