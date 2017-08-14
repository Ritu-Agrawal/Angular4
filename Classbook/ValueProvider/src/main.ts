import { Component,Inject, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
enableProdMode();

@Component({
  selector: 'my-app',
  template: `<h1>Value Provider Demo</h1>`
})

export class ValueProviderComponent {
	constructor(@Inject('COMPANY_NAME') companyName:any){
		console.log(companyName);
	}
}

@NgModule({
  imports:[ BrowserModule ],
  declarations:[ ValueProviderComponent ],
  providers:[ { provide:'COMPANY_NAME', useValue:'Capgemini'} ],
  bootstrap:[ ValueProviderComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
  