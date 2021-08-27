import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;
  private LimitItemsForQuery: string = '3';

  constructor( private http: HttpClient ) { }


  getHeroes ():Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroe ( id: string):Observable<Heroe> {
    return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`);
  }

  getSuggestions ( query: string ):Observable<Heroe[]> {

    return this.http.get<Heroe[]>( `${ this.baseUrl}/heroes?q=${ query }&_limit=${ this.LimitItemsForQuery }` );
  }

  addHero(hero:Heroe):Observable<Heroe> {

    return this.http.post<Heroe>(`${ this.baseUrl }/heroes`,hero);

  }

  updateHero(hero: Heroe):Observable<Heroe> {

    return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${hero.id}`,hero);

  }
  deleteHero(id: String):Observable<any> {

    return this.http.delete<any>(`${ this.baseUrl }/heroes/${id}`);

  }

}
