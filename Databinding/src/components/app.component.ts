import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './src/components/app.component.html'
})
export class AppComponent {
    companyName: string;
    city: string;
    currentTime: string;
    message: string;

    constructor() {
        this.companyName = 'Capgemini';
        this.city = 'Bangalore';
        this.currentTime = new Date().toLocaleTimeString();
        this.message = 'Initial Message';
    }

    getCurrentTime():void{
        this.currentTime = new Date().toLocaleTimeString();
    }
}