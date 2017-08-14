import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


enableProdMode();

@Component({
  selector: 'my-app',
  template: `<div>
	<h1>$event object</h1>
	<input type="text" (keyup)='onKey($event)'/>
	<hr/>
	<span [innerText]='values'></span>
  <div>`
})

export class EventObjectComponent {
	values:string="";
	onKey(event:any) {
		this.values += event.target.value + ' | ';
	}
}

@NgModule({
	imports:[ BrowserModule ],
	declarations:[ EventObjectComponent ],
	bootstrap:[ EventObjectComponent ]
})
export class AppComponent{}

platformBrowserDynamic().bootstrapModule(AppComponent);