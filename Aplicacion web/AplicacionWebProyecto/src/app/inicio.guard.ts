import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioGuard implements CanActivate {
  constructor(private _router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(localStorage.getItem('email'));
    if(localStorage.getItem('email') !==  null){
      this._router.navigate(['/menu']);
      return false;

    }
    else{

      return true;
    }
  }
}
