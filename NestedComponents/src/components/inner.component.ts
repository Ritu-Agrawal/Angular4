import {Component,Input,Output,EventEmitter} from '@angular/core';
import { Person } from '../models/person';
@Component({
    selector:'inner-app',
    templateUrl:'./src/components/inner.component.html',
    styles:['.sty{background-color:black;color:yellow}']
})
export class InnerComponent{
    innerMsg:string;
    @Input() outerMsgHolder:string;
    @Output() innerEvent = new EventEmitter<string>();
    personObj: Person;

    constructor(){
        this.innerMsg = 'Message from Inner Component';
        this.personObj = {name:'Karthik',department:'Training'};
    }
    sendDetails():void{
        this.innerEvent.emit(this.innerMsg);
    }
}