import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { POKEMONS } from 'src/app/shared/pokemons-mock';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit{

  // on initialise une liste de pokemon correspondant au modèle type sous forme de tableau et en récupérant les datas du mock
  pokemons : Pokemon[] = POKEMONS; 
  pokemonDetail!: Pokemon //on initialise le détail des pokémons grâce au model Pokemon
  
  constructor(){}

  ngOnInit(): void {
    
  }

  // fonction qui permet d'afficher le détail d'un pokemon au clique
  onSelectPokemon(pokemon: Pokemon): void {
     this.pokemonDetail = pokemon;
     console.log(pokemon);
   }
}
