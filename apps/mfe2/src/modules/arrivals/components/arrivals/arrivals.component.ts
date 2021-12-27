import { Component, OnInit } from '@angular/core';
import {ArrivalsService} from '../../services/arrivals.service';
import {Observable} from 'rxjs';
import {Flight} from '../../model/flight.interface';

@Component({
  selector: 'pwa-module-fed-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent implements OnInit {

  flights$: Observable<Flight[]> = this.arrivalsService.flights$;

  constructor(private readonly arrivalsService: ArrivalsService) { }

  ngOnInit(): void {
    this.arrivalsService.loadFlights();
  }

}
