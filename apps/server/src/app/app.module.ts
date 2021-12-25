import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'pwa-shell'),
        serveRoot: '/pwa-shell',
      },
      {
        rootPath: join(__dirname, '..', 'pwa-mfe1'),
        serveRoot: '/pwa-mfe1',
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
