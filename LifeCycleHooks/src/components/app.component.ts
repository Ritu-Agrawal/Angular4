import {Component} from '@angular/core';
@Component({
    selector:'my-app',
    templateUrl:'./src/components/app.component.html'
})
export class AppComponent{
    status:boolean;
    firstName:string;
    lastName:string;

    constructor(){
        this.status = true;
        this.firstName = 'Karthik';
        this.lastName = 'Muthukrishnan';
    }
    toggleView():void{  
        this.status = !this.status;
    }
}