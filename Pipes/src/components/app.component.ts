import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import {Component} from '@angular/core';
@Component({
    selector:'my-app',
    templateUrl:'./src/components/app.component.html'
})
export class AppComponent{
    today:Date;
    data:any;
    observableObj:Observable<number>;
    constructor(){
        this.today = new Date();
        this.data = [
            {id:1,name:'Karthik'},
            {id:2,name:'Ashik'},
            {id:3,name:'John'}
        ]
        this.observableObj = Observable.interval();
    }
}