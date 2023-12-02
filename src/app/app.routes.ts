import { Routes } from '@angular/router';
import { LandingComponent } from './core/components/layouts/landing/landing.component';
import { autRoutes } from './auth/auth.routes';
import { LoginComponent } from './auth/components/auth/login/login.component';
import { dashboadRoutes } from './dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  ...autRoutes,
  ...dashboadRoutes,
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./comments/comments.module').then((m) => m.CommentsModule),
  },
];
