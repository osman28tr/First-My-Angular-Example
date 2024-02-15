import { ApplicationConfig, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CustomPipe } from './pipes/custom.pipe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),{provide:DEFAULT_CURRENCY_CODE,useValue:'TRY'},CustomPipe]
};
