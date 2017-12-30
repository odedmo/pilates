import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const apiPath = 'http://localhost:3000/api/';

@Injectable()
export class ApiService {

    constructor(private http: Http) {}

    getMessages() {
        this.http.post(apiPath + 'test', {name: 'oded'}).subscribe(res => {
            console.log(res);
        })
    }
}