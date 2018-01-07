import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'register',
    template: `
        <mat-card>
            <mat-card-title>
                <h4>Register New User</h4>
            </mat-card-title>
            <mat-card-content>
                <form>
                    <mat-form-field>
                        <input [(ngModel)]="registerData.email" name="email" matInput placeholder="email" type="email">
                    </mat-form-field>
                    <mat-form-field>
                        <input [(ngModel)]="registerData.password" name="password" matInput placeholder="password" type="password">
                    </mat-form-field>
                    <button (click)="post()" mat-raised-button color="primary">Register</button>
                </form>
            </mat-card-content>
        </mat-card>
    `
})
export class RegisterComponent {
    registerData = {};

    constructor(private authService: AuthService) { }

    post() {
        this.authService.register(this.registerData);
        //this.authService.registerUser(this.registerData)
    }
}
