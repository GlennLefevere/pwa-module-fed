import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Flight} from '../../model/flight.interface';
import {DeparturesService} from '../../services/departures.service';

@Component({
  selector: 'pwa-module-fed-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss'],
})
export class DeparturesComponent implements OnInit {

  flights$: Observable<Flight[]> = this.departuresService.flights$;

  constructor(private readonly departuresService: DeparturesService) {
  }

  ngOnInit(): void {
    this.departuresService.loadFlights();
  }

}
