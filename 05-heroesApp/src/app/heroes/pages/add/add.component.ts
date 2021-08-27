import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles:[
    `
    img{
      width: 100%;
      border-radius: 15px;
    }
    `
  ]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: "Dc Comics",
      desc: "Dc - Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ]

  heroe: Heroe =
  {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    alt_img: '',
  }

  constructor( 
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('edit'))
    {return;}

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroe( id ))
      )
      .subscribe( heroe => this.heroe = heroe);

  }


  save() {
    console.log(this.heroe);

    if( this.heroe.superhero.trim().length === 0 )
      return;

    if( this.heroe.id )
    {
      //Update
      this.heroesService.updateHero( this.heroe )
        .subscribe( heroe => this.showSnakBar(`Hero data updated: ${this.heroe.superhero} successfully!!!`));      

    }else{
      //Create
      this.heroesService.addHero( this.heroe )
      .subscribe( 
        heroe => {
          this.showSnakBar(`named hero: ${this.heroe.superhero} was successfully registered!!!`)         
          this.router.navigate(['/heroes/edit',heroe.id])
        });
    }

    
  }


  delete() {
    this.heroesService.deleteHero(this.heroe.id!)
        .subscribe( resp => {
          this.showSnakBar(`named hero: ${this.heroe.superhero} was successfully deleted!!!`) 
          this.router.navigate(['/heroes/']);
        });

  }

  showSnakBar( message: string ) : void {
    this.snackBar.open(message,'ok!',{
      duration:7000
    });
  }
}
