import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ComponentDirective } from './component.directive';

enableProdMode();

@Component({
	selector: 'my-app',
	template:'<my-directive></my-directive>',
})

export class DirectiveComponent {
}

@NgModule({
	imports:[BrowserModule],
	declarations:[DirectiveComponent,ComponentDirective],
	bootstrap:[DirectiveComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
