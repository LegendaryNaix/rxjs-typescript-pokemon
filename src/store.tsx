import  { BehaviorSubject } from 'rxjs';

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
}

// 在 rxjs 中的 $ 符號是一種約定成俗的命名方式，用來表示這是一個 Observable 物件
export const rawPokemon$ = new BehaviorSubject<any>([])

fetch('/pokemon-simplified.json')
  .then(res => res.json())
  .then(data => rawPokemon$.next(data))