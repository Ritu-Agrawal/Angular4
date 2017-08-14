import { Component,NgModule,enableProdMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

enableProdMode();

@Component({
  selector: 'my-app',
  template:`<div>
	<p>Value = {{value}}</p>
    <button (click)="increment()">Increment</button>
	<hr/>
	 <div [ngSwitch]="value">
      <div *ngSwitchCase="0">Zero</div>
      <div *ngSwitchCase="1">One</div>
	  <div *ngSwitchCase="2">Two</div>
	  <div *ngSwitchDefault>Not Supported</div>
	 </div>
  <div>`
})

export class StructuralComponent {
	value:number = 0;
	increment() {
		this.value = this.value + 1;
	}
}

@NgModule({
	imports:[ BrowserModule ],
	declarations:[ StructuralComponent ],
	bootstrap:[ StructuralComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);