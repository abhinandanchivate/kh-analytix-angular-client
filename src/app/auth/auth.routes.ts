import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { errorInterceptor } from '../shared/interceptors/error.interceptor';

export const autRoutes = [
  {
    path: 'auth/login',

    loadComponent: () =>
      import('./components/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'auth/register',
    providers: [provideHttpClient(withInterceptors([errorInterceptor]))],
    loadComponent: () =>
      import('./components/auth/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
];
