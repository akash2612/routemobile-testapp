import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalService } from '../services/global.service';

export class ErrorIntercept implements HttpInterceptor {
    constructor(private err:GlobalService) {}
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    if(error.error.hasOwnProperty('error')) {
                        this.err.errorMsg = error.error.error;
                        let obj = this;
                        setTimeout(function() {
                            obj.err.errorMsg = ''
                        },1800);
                    }else {
                        this.err.errorMsg = 'Network Error';
                        let obj = this;
                        setTimeout(function() {
                            obj.err.errorMsg = ''
                        },1800);
                    }
                    return throwError(errorMessage);
                })
            )
    }
}