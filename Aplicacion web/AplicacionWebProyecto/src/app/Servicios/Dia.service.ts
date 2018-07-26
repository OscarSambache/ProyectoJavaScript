import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Dia} from "../Modells/Dia";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable()


export class DiaService {

  private url: string = 'http://localhost:1337/Dia';
  constructor (private http: HttpClient) {}

  getDias(): Observable<Dia[]> {
    return this.http.get<Dia[]>(this.url)
  }
}
