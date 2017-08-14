import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { CustomDirective } from './custom.directive';

enableProdMode();

@Component({
  selector: 'my-app',
   template: `<div>
	<h1>Custom Directive</h1>
	<hr/>
	<button myDirective>Directive Component</button>
	</div>`
})

export class DirectiveComponent {}

@NgModule({
	imports:[ BrowserModule ],
	declarations:[ DirectiveComponent,CustomDirective ],
	bootstrap:[ DirectiveComponent ]
})
export class AppComponent{}

platformBrowserDynamic().bootstrapModule(AppComponent);