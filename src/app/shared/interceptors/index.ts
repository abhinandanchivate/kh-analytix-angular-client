import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { errorInterceptor } from './error.interceptor';
import { headerInterceptor } from './header.interceptor';

// to declare the array.  : ease of maintainance.
export const interceptors = [headerInterceptor];
