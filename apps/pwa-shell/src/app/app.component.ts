import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'pwa-module-fed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pwa-shell';

  constructor(private readonly swUpdate: SwUpdate) {
  }

  ngOnInit(): void {
    this.swUpdate.versionUpdates.subscribe(() => {
      console.log('update');
      window.location.reload();
    })
  }
}
