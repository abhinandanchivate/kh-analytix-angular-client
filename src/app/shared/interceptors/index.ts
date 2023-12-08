import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { errorInterceptor } from './error.interceptor';

// to declare the array.  : ease of maintainance.
export const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,

    multi: true,
  },
];
