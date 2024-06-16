import  { BehaviorSubject, map } from 'rxjs';

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
}

// 在 rxjs 中的 $ 符號是一種約定成俗的命名方式，用來表示這是一個 Observable 物件
export const rawPokemon$ = new BehaviorSubject<any>([])
// pipe() 是 rxjs 用於連接 operators 方法，用來將 Observable 物件進行串接
export const pokemonWithPower$ = rawPokemon$.pipe(
	map(pokemon =>
		pokemon.map((p: Pokemon) => ({
			...p,
			power:
				p.hp +
				p.attack +
				p.defense +
				p.special_attack +
				p.special_defense +
				p.speed
		}))
	)
);

fetch('/pokemon-simplified.json')
  .then(res => res.json())
  .then(data => rawPokemon$.next(data))