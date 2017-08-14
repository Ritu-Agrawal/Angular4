import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModule }      from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InnerComponent } from './inner.component';

enableProdMode();

@Component({
  selector: 'my-app',
  template:`<div>
    <inner-app [employeeObj]="employee"></inner-app>
    <hr/>
    <button (click)="changeProperty()">Change Property</button>
    <button (click)="changeObject()">Change Object</button>
  </div>`
})

export class MainComponent {
	employee:{id:number,name:string};

    constructor(){
        this.employee = {id:101,name:'Karthik'};
    }

    changeProperty():void{
        this.employee.name = "Ganesh";
    }

     changeObject():void{
        this.employee = {id:102,name:"Anil"};
    }
}

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MainComponent,InnerComponent ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
