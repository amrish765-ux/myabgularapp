import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: ([provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ])
};