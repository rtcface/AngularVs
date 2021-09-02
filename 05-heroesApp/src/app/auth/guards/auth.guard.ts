import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {
  constructor(private authService: AuthService,
    private router: Router){

  };
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> | boolean{
      return this.authService.virifyAuth()
              .pipe(
                tap( isAuthenticated => {
                  if(!isAuthenticated){
                    this.router.navigate(['./auth/login']);
                  }
                })
              );

    //   if( this.authService.auth.id ){
    //     return true;
    //   }      
    //   console.log("Locked for AuthGuard-canActive");
    // return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {
      // console.log("canLoad: ",true);
      // console.log( route );
      // console.log( segments );
     
    //   if( this.authService.auth.id ){
    //     return true;
    //   }
    //   console.log("Locked for AuthGuard-CanLoad");
    // return false;

      return this.authService.virifyAuth()
              .pipe(
                tap( isAuthenticated => {
                  if(!isAuthenticated){
                    this.router.navigate(['./auth/login']);
                  }
                })
              );


  }
}
