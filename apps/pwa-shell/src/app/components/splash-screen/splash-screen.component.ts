import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animate, animateChild, query, style, transition, trigger} from '@angular/animations';
import {PwaService} from '../../services/pwa.service';

@Component({
  selector: 'pwa-module-fed-splash-screen',
  templateUrl: './splash-screen.component.html',
  styles: [`
    .splash-screen {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 9999;
      background-color: #1d2d3a;
    }
  `],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        query(':leave', animateChild(), {optional: true}),
        animate(300, style({opacity: 0})),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashScreenComponent implements OnInit {
  show = true;

  constructor(
    private pwaService: PwaService,
    private cdr: ChangeDetectorRef,
    private appRef: ApplicationRef,
  ) {
  }

  ngOnInit() {
    this.pwaService.checkForUpdate()
      .subscribe(result => {
        this.show = result;
        this.cdr.detectChanges();
      });
  }

}
