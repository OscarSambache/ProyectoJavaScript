import { Injectable }from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import {of} from "rxjs/observable/of";
import {Usuario} from "./Modells/Usuario";


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class api_rest {

  private url: string = 'http://localhost:1337/Usuario';
  constructor (private http: HttpClient) {}

  getUser(email: string): Observable<Usuario> {
    email= "?email="+email
    const url = `${this.url}/${email}`;
    return this.http.get<Usuario>(url);
  }


  addUser (usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario, httpOptions).pipe(
      tap((usuario: Usuario) => this.log(`added User w/ id=${usuario.nombre}`)),
      catchError(this.handleError<Usuario>('addUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('UserService: ' + message);
  }

}
