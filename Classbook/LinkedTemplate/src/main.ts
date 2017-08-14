import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModule }      from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();

@Component({
  selector: 'my-app',
  templateUrl:'src/main.component.html'
})

export class LinkedTemplateComponent {
	greet:string="Hello Angular2!";
}

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ LinkedTemplateComponent ],
  bootstrap:    [ LinkedTemplateComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
