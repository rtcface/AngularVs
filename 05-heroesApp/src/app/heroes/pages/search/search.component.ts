import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [  ]
})
export class SearchComponent implements OnInit {
  termino: string ='';
  heroes: Heroe[] = []; 
  selectedHero: Heroe | undefined;
  constructor( private heroesService:HeroesService ) { }

  ngOnInit(): void {

  }

  searching() {
    this.heroesService.getSuggestions( this.termino.trim() )
    .subscribe( heroes => this.heroes = heroes);
  }

  selectedOption( event:MatAutocompleteSelectedEvent ) {

    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }
    
    const heroe: Heroe= event.option.value;
    this.termino=heroe.superhero;

    this.heroesService.getHeroe(heroe.id! )
    .subscribe( heroes => this.selectedHero=heroes);
  }



}
