import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();

@Component({
  selector: 'my-app',
  template: `<div>
	<h1>Two way Binding Demo</h1>
	<input type="text" [(ngModel)]='data'/>
	<hr/>
	<span [innerText]='data'></span>
  <div>`
})


class TwoWayBindingComponent {
	data:string="Initial Data";
}

@NgModule({
	imports:[ BrowserModule, FormsModule ],
	declarations:[ TwoWayBindingComponent ],
	bootstrap:[ TwoWayBindingComponent ]
})

class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);