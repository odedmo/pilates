import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const apiPath = 'http://localhost:3000/api/';

@Injectable()
export class AuthService {
    messages:any[] = []

    constructor( private http: Http) {}

    register(registerData: any) {
        this.http.post(apiPath + 'register', registerData).subscribe(res => {});
    }

    login(loginData: any) {
        this.http.post(apiPath + 'login', loginData).subscribe(res => {
            console.log(res);
            localStorage.setItem('token', res.json().token);
        });
    }
}