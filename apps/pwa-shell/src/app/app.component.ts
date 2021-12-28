import {Component, HostListener} from '@angular/core';
import {PwaService} from './services/pwa.service';

@Component({
  selector: 'pwa-module-fed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private readonly pwaService: PwaService) {
  }

  @HostListener('window:offline')
  onOffline() {
    this.pwaService.applicationOffline();
  }

  @HostListener('window:online')
  onOnline() {
    this.pwaService.applicationOnline();
  }

}
