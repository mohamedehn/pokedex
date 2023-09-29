import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

  // l'input permet d'afficher la list pokément que l'on récupère du service (service qui récupère la data du mocl)
  @Input() pokemonList : Pokemon[] = [];
  // l'output va permettre d'envoyer le pokémon sur lequel on clique dans le pokedex parent et afficher les infos du component details
  @Output() selectPokemon = new EventEmitter<Pokemon>(); 

  constructor(){} 

  ngOnInit(): void {
    
  }

  onSelect(pokemon: Pokemon): void {
    this.selectPokemon.emit(pokemon);
  }

}
