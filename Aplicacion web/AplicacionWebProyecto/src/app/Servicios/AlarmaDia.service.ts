import {Injectable} from "@angular/core";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {catchError, tap} from "rxjs/operators";
import {AlarmaDia} from "../Modells/AlarmaDia";


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable()

export class AlarmaDiaService {
  private url: string = 'http://localhost:1337/AlarmaDia';

  constructor(private http: HttpClient){

  }

  addAlarmaDia (alarmaDia: AlarmaDia): Observable<AlarmaDia> {
    return this.http.post<AlarmaDia>(this.url, alarmaDia, httpOptions);
  }
}
