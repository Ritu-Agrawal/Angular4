import {Component,ViewEncapsulation} from '@angular/core';
@Component({
    selector:'my-app',
    templateUrl:'./src/components/app.component.html',
    styles:[
        '.sty{background-color:maroon;color:white}',
        '.sty01{color:black}'
    ]
})
export class AppComponent{
    outerMsg:string;
    innerMsgHolder:string;
    constructor(){
        this.outerMsg = 'Message from Outer Component';
        this.innerMsgHolder = '...';
    }
    getDetails(data:string):void{
        this.innerMsgHolder = data;
    }
}