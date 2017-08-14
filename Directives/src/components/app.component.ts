import {Component} from '@angular/core';
import { Employee } from '../models/employee';
import { CgHover } from '../directives/cghover.directive';
@Component({
    selector:'my-app',
    templateUrl:'./src/components/app.component.html',
    styles:[
        '.sty01{background-color:yellow;color:black}',
        '.sty02{background-color:maroon;color:white}',
    ]
})
export class AppComponent{
    showStatus:boolean;
    cities:string[];
    employees:Employee[];
    counter:number;
    isPrimary:boolean;
    fontWeight:string;
    fontStyle:string;
    fontSize:string;
    message:string;

    constructor(){
        this.showStatus = true;
        this.cities = ['Bangalore','Chennai','Mumbai'];
        this.employees = [
            {name:'Karthik'},
            {name:'Ashik'},
            {name:'John'}
        ];
        this.counter = 0;
        this.isPrimary = false;
        this.fontWeight = 'normal';
        this.fontStyle = 'normal';
        this.fontSize = '20px';
        this.message = 'Initial Message';
    }
    toggleStatus():void{
        this.showStatus = !this.showStatus;
    }
    incrementCounter():void{
        this.counter+=1;
    }
    changeSize(event:Event):void{
       this.fontSize = (event.target as HTMLInputElement).value+'px';
    }
}