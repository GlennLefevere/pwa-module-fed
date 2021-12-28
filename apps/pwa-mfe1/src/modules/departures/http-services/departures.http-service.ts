import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Flight} from '../model/flight.interface';

@Injectable()
export class DeparturesHttpService {

  private readonly url = `${environment.api}/flights/departures`;

  constructor(private readonly http: HttpClient) {
  }

  getArrivals(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.url);
  }
}
