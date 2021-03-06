import { Injectable, Injector } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    
    constructor(private injector: Injector) {}

    intercept(req: any, next: any) {
        const auth = this.injector.get<any>(AuthService);
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + auth.token)
        })
        return next.handle(authRequest);
    }
}