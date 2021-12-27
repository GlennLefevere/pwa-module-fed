import {Injectable} from '@angular/core';
import {BehaviorSubject, firstValueFrom, Subject} from 'rxjs';
import {DeparturesHttpService} from '../http-services/departures.http-service';
import {Flight} from '../model/flight.interface';

@Injectable()
export class DeparturesService {
  flights$: Subject<Flight[]> = new BehaviorSubject<Flight[]>([]);

  constructor(private readonly departuresHttpService: DeparturesHttpService) {
  }

  async loadFlights(): Promise<void> {
    const result = await firstValueFrom(this.departuresHttpService.getArrivals());
    this.flights$.next(result);
  }

}
