import {Injectable} from "@angular/core";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {catchError, tap} from "rxjs/operators";
import {Alarma} from "../Modells/Alarma";


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable()

export class AlarmaService {
  private url: string = 'http://localhost:1337/Alarma';

  constructor(private http: HttpClient){

  }

  addAlarma (alarma: Alarma): Observable<Alarma> {
    return this.http.post<Alarma>(this.url, alarma, httpOptions);
  }

  getAlarma(id: number): Observable<Alarma> {
    const url = `${this.url}/${id}`;
    return this.http.get<Alarma>(url);
  }

  getAlarmas(): Observable<Alarma[]> {
    return this.http.get<Alarma[]>(this.url);
  }
}
