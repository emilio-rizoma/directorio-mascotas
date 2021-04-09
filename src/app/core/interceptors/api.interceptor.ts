import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let globalHeaders: HttpHeaders = request.headers;
    globalHeaders = globalHeaders.set('x-api-key', environment.apiKey);
    const authReq = request.clone({
      headers: globalHeaders
    });
    return next.handle(authReq);
  }
}
