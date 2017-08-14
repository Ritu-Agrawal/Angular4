import {Component,ViewEncapsulation} from '@angular/core';
@Component({
    selector:'my-app',
    templateUrl:'./src/components/app.component.html',
    styles:[
        '.sty01{color:blue;text-transform:uppercase}',
        '.sty02{background-color:yellow}'],
    styleUrls:['./src/components/app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    name:string;
    description:string;

    constructor(){
        this.name = 'Karthik';
        this.description = 'I am a trainer for Capgemini';
    }

}