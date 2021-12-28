import {Controller, Get} from '@nestjs/common';

import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('flights/arrivals')
  getArrivals() {
    return this.appService.getArrivals();
  }

  @Get('flights/departures')
  getDepartures() {
    return this.appService.getDepartures();
  }
}
