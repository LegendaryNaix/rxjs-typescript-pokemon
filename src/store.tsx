import { BehaviorSubject, map, combineLatestWith } from "rxjs";

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  power?: number;
  selected?: boolean;
}

// 在 rxjs 中的 $ 符號是一種約定成俗的命名方式，用來表示這是一個 Observable 物件
export const rawPokemon$ = new BehaviorSubject<any>([]);
// pipe() 是 rxjs 用於連接 operators 方法，用來將 Observable 物件進行串接
export const pokemonWithPower$ = rawPokemon$.pipe(
  map((pokemon) =>
    pokemon.map((p: Pokemon) => ({
      ...p,
      power:
        p.hp +
        p.attack +
        p.defense +
        p.special_attack +
        p.special_defense +
        p.speed,
    }))
  )
);

export const selected$ = new BehaviorSubject<number[]>([]);

export const pokemon$ = pokemonWithPower$.pipe(
  combineLatestWith(selected$),
  map(([pokemon, selected]) =>
    pokemon.map((p: Pokemon) => ({
      ...p,
      selected: selected.includes(p.id),
    }))
  )
);

export const deck$ = pokemon$.pipe(
  map((pokemon) => pokemon.filter((p: Pokemon) => p.selected))
);

fetch("/pokemon-simplified.json")
  .then((res) => res.json())
  .then((data) => rawPokemon$.next(data));
