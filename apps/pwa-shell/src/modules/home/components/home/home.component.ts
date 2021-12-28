import {Component} from '@angular/core';
import {PwaService} from '../../../../app/services/pwa.service';
import {firstValueFrom, Observable, shareReplay} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'pwa-module-fed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  online$: Observable<boolean> = this.pwaService.online$.pipe(shareReplay());

  constructor(private readonly pwaService: PwaService,
              private readonly router: Router) {
  }

  async onArrivalsClicked(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    const online = await firstValueFrom(this.online$);

    if (online) {
      this.router.navigate(['arrivals']);
    }
  }

  async onDeparturesClicked(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    const online = await firstValueFrom(this.online$);

    if (online) {
      this.router.navigate(['departures']);
    }
  }

}
