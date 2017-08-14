import { Component,NgModule,enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
enableProdMode();

@Component({
    selector:'my-app',
    template:`<div>
        <h1>Ng-For Directive</h1>
        <hr/>
        <ul>
            <li *ngFor="let city of cities">{{ city }}</li>
        </ul>
        <hr/>
        <select>
            <option *ngFor="let city of cities; let counter=index" [value]="counter">{{ city }}</option>
        </select>
        <hr/>
         <select>
            <option *ngFor="let employee of employees" [value]="employee.id">{{ employee.id+"-"+employee.name }}</option>
        </select>
     </div>`
})
class StructuralComponent{
   cities:string[] = ["Chennai","Bangalore","Mumbai"];
   employees:any = [
       {id:714709,name:"Karthik"},
       {id:707224,name:"Latha"},
       {id:714733,name:"Ganesh"}
    ];
}
@NgModule({
    imports:[ BrowserModule ],
    declarations:[ StructuralComponent ],
    bootstrap:[ StructuralComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);