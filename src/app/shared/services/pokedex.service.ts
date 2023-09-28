import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { POKEMONS } from '../pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() {}

  getPokemons(): Pokemon[]{
    return POKEMONS
  }
}
