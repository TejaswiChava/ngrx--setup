import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
// import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs';

@Injectable()
export class  AuthorizationInterceptor implements HttpInterceptor {
  constructor() {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginData: any = localStorage.getItem('payload');
    if (loginData) {
      const authdata: any = localStorage.getItem('token');
      request = request.clone({ headers: request.headers.set('Authorization', 'Basic ' + authdata ) });
    }
   // Clone the request to add the new header

   return next.handle(request);

  }
}
