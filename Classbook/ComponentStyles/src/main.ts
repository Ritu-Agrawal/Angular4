import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModule }      from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
enableProdMode();

@Component({
  selector: 'my-app',
  template: `
	<link rel="stylesheet" href="src/style.link.component.css">
	<style>
		.custom{
			color:blue;
			text-transform:uppercase
		}
	</style>
	<div>
	<h3 class="custom">Template Inline Styles</h3>
	<hr/>
    <h1>{{'Styling the name "'+name+'" using styles property in the component metadata'}}</h1>
	<hr/>
	<h3 class="sty">Styling using styleUrls property in the component metadata</h3>
	<hr/>
	<h3 class="spl">Styling using Template Link Tags</h3>
  <div>`,
  styles:['h1{color:red}'],
  styleUrls:['src/style.component.css']
})

export class StyleComponent {
	name:string = "Karthik"
}

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ StyleComponent ],
  bootstrap:    [ StyleComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

  