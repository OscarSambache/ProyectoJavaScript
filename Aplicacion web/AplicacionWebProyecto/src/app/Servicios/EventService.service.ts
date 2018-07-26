import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {}

//  getEvents(): Observable<Evento[]>  {
    //return this.http.get<Evento>('showcase/resources/data/scheduleevents.json');
  //}
}


