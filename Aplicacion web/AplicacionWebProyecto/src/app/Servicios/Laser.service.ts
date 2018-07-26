import {Injectable} from "@angular/core";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {catchError, tap} from "rxjs/operators";
import {Usuario} from "../Modells/Usuario";
import {Laser} from "../Modells/Laser";
import {lugar} from "../Modells/lugar";
import {Alarma} from "../Modells/Alarma";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable()

export  class LaserService {
  private url: string = 'http://localhost:1337/Laser';

  constructor(private http: HttpClient){

  }

  addLaser (laser: Laser): Observable<Laser> {
    return this.http.post<Laser>(this.url, laser, httpOptions);
  }
  getLaser(id: number): Observable<Laser> {
    const url = `${this.url}/${id}`;
    return this.http.get<Laser>(url);
  }


}
