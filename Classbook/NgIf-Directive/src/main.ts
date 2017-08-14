import { Component,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'my-app',
  template: `<div>
	<div *ngIf="status">Status is set to true</div>
	<div *ngIf="!status">Status is set to false</div>
  <div>`
})

export class StructuralComponent {
	status:boolean = true;
}

@NgModule({
  imports:[ BrowserModule ],
  declarations:[ StructuralComponent ],
  bootstrap:[ StructuralComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);


  