import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InnerComponent } from './inner.component';
import { OuterComponent } from './outer.component';

enableProdMode();


@NgModule({
  imports:[ BrowserModule ],
  declarations:[ OuterComponent,InnerComponent ],
  bootstrap:[ OuterComponent ]
})
export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
  
