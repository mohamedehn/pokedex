import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { POKEMONS } from '../pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemonList : Pokemon [] = POKEMONS // initialisation d'une liste de type Pokemon Array et qui contient les pokémons stocké dans le mock

  constructor() {}

  //get pokemons permet de récupérer les pokémons stocké dans le mock qu'on affichera ensuite
  getPokemons(): Pokemon[]{
    return this.pokemonList;
  }

  // méthode qui permet d'ajouter au tableau de pokemons existant dans le mock le nouveau pokemon à ajouter qui est du type "Pokemon"
  addPokemon(pokemon: Pokemon): void{
    this.pokemonList.push(pokemon)
  }
}
