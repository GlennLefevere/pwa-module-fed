import {Injectable} from '@angular/core';
import {ArrivalsHttpService} from '../http-services/arrivals.http-service';
import {BehaviorSubject, firstValueFrom, Subject} from 'rxjs';
import {Flight} from '../model/flight.interface';

@Injectable()
export class ArrivalsService {

  flights$: Subject<Flight[]> = new BehaviorSubject<Flight[]>([]);

  constructor(private readonly arrivalsHttpService: ArrivalsHttpService) {
  }

  async loadFlights(): Promise<void> {
    const result = await firstValueFrom(this.arrivalsHttpService.getArrivals());
    this.flights$.next(result);
  }

}
