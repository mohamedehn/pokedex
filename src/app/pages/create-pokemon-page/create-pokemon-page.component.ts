import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css']
})

export class CreatePokemonPageComponent implements OnInit{

  formSubmitted: boolean = false; // initialisation du formulaire à false, qui passera à true lors de l'envoi du formulaire

  public newPokemon! : any; // initialisation d'un nouveau 'Pokemon' qui contiendra les éléments d'un pokemon

  // initialisation des contrôle du formulaire où l'on passera les paramètres de validation (ex required)
  pokemonForm = this.fb.group({
    name: new FormControl('', Validators.required),
    image: new FormControl('', [Validators.required, this.isUrlValid('image')] ),
    description: new FormControl('', Validators.required),
  })

  constructor(private fb: FormBuilder, private pokedexService: PokedexService, private router: Router){}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
      this.formSubmitted = true; // si les contrôle sont ok, le formulaire est soumis en passant le boolean true à formSubmitted
      this.newPokemon = this.pokemonForm.value // on stock les valeurs du formulaire dans newPokemon
      console.log(this.newPokemon);
      this.pokedexService.addPokemon(this.newPokemon)// on envoi au travers du service et de la méthode addPokemon le nouveau pokemon
      if(this.pokemonForm.valid){ // on vérifie si le formulaire est valide avant de router sur la list pokemon
        this.router.navigate(['/']) // permet de revenir à la page d'accueil
      }
  }

  // Fonction pour verifier si l'url est valide
  isUrlValid(image: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const imageValue = control.value as string; // on récupère la valeur du contrôle
      // si imageValue existe et qu'elle ne démarre pas par http on renvoi true à urlInvalid et on bloque côté html la validation
      return imageValue && !imageValue.startsWith('http') ? { 'urlInvalid': true } : null; 
    };
  } 
}
