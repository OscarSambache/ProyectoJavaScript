import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, tap} from "rxjs/operators";
import {Usuario} from "../Modells/Usuario";
import {Observable} from "rxjs/Observable";
import {lugar} from "../Modells/lugar";
import {of} from "rxjs/observable/of";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable()
export class LugarService {

  private url: string = 'http://localhost:1337/Lugar';
  constructor (private http: HttpClient) {}

  getLugares(): Observable<lugar[]> {
    return this.http.get<lugar[]>(this.url)
  }

  getLugar(descripcionLugar: string): Observable<lugar> {
    descripcionLugar= "?descripcionLugar="+descripcionLugar
    const url = `${this.url}/${descripcionLugar}`;
    return this.http.get<lugar>(url).pipe(
      tap(_ => this.log(`fetched hero id=${descripcionLugar}`)),
      catchError(this.handleError<lugar>(`getLugar descricpion=${descripcionLugar}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('lugarService: ' + message);
  }

}
