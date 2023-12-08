import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptors,
  withJsonpSupport,
} from '@angular/common/http';
import { errorInterceptor } from './shared/interceptors/error.interceptor';
import { interceptors } from './shared/interceptors';
import { headerInterceptor } from './shared/interceptors/header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([headerInterceptor])),
    provideRouter(routes),
  ],
};
