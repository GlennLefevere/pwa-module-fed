import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Flight} from '../model/flight.interface';
import {Observable} from 'rxjs';

@Injectable()
export class ArrivalsHttpService {

  private readonly url = `${environment.api}/flights/arrivals`;

  constructor(private readonly http: HttpClient) {
  }

  getArrivals(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.url);
  }

}
