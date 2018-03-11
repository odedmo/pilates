import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    messages:any[] = []
    apiPath = 'http://localhost:3000/api/';
    TOKEN_KEY = 'token';

    constructor(private http: HttpClient) {}

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    register(registerData: any) {
        this.http.post<any>(this.apiPath + 'register', registerData).subscribe(res => {
            this.saveToken(res.token);
        });
    }

    login(loginData: any) {
        this.http.post<any>(this.apiPath + 'login', loginData).subscribe(res => {
            this.saveToken(res.token);
        });
    }

    saveToken(token: string) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }
}