import { HttpInterceptorFn } from '@angular/common/http';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('hello from error interceptor called');
  console.log(req.url);
  return next(req);
};
