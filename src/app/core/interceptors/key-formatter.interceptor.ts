import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { caseName } from '@core/enums';
import { KeyFormatterService } from '@core/services/utils/key-formatter.service';

@Injectable()
export class KeyFormatterInterceptor implements HttpInterceptor {

  constructor(private keyFormatter: KeyFormatterService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const snakeCaseObject: unknown = this.keyFormatter.convertKeys(request.body, caseName.snake);
    request = request.clone({ body: snakeCaseObject });
    return next.handle(request).pipe(
      map((event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse) {
          const camelCaseObject: unknown = this.keyFormatter.convertKeys(event.body, caseName.camel);
          event = event.clone({ body: camelCaseObject });
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => throwError(error))
    ) as Observable<HttpEvent<unknown>> ;
  }
}
