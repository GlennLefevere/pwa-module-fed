import {ApplicationRef, Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {
  BehaviorSubject,
  catchError,
  first,
  from,
  mapTo,
  Observable,
  of,
  Subject,
  switchMap,
  timeout,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  online$: Subject<boolean> = new BehaviorSubject<boolean>(navigator.onLine);

  constructor(
    private appRef: ApplicationRef,
    private swUpdate: SwUpdate,
  ) {
    if (this.swUpdate.isEnabled) {
      this.appRef.isStable.pipe(
        first(isStable => isStable),
        switchMap(() => this.swUpdate.versionUpdates),
      ).subscribe(() => {
        this.swUpdate.activateUpdate().then(() => document.location.reload());
      });
    }
  }

  checkForUpdate(): Observable<boolean> {
    const waitFor = 1000;

    if (this.swUpdate.isEnabled) {
      const available$ = this.swUpdate.versionUpdates.pipe(
        mapTo(true),
        timeout(waitFor),
        catchError(() => of(false)),
      );

      return from(this.swUpdate.checkForUpdate()).pipe(
        switchMap(() => available$),
      );
    }

    return timer(waitFor).pipe(mapTo(false));
  }

  applicationOffline() {
    this.online$.next(false);
  }

  applicationOnline() {
    this.online$.next(true);
  }

}
