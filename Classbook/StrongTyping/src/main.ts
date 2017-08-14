import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IEmployee } from './employee';

enableProdMode();

@Component({
  selector: 'my-app',
  template: `<div>
    <h1>Strong Typing</h1>
	<hr/>
	<span>Id : </span>{{employee.id}}
    <span>Name : </span>{{employee.name}}
  <div>`
})

export class StrongTypingComponent {
	employee:IEmployee = {
		id:714709,
		name:'Karthik'
	};
}

@NgModule({
  imports:[ BrowserModule ],
  declarations:[ StrongTypingComponent ],
  bootstrap:[ StrongTypingComponent ]
})
class AppModule{}

 platformBrowserDynamic().bootstrapModule(AppModule);