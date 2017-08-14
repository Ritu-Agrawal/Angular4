import { Component,Inject, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();

@Component({
  selector: 'my-app',
  template: `<h1>Factory Provider Demo</h1>`
})

export class FactoryProviderComponent {
	constructor(@Inject('AddNumbers') add:any){
   		console.log(add(4,5));
	}
}

@NgModule({
  imports:[ BrowserModule ],
  declarations:[ FactoryProviderComponent ],
  providers:[{
    provide:'AddNumbers', 
    useFactory:()=>{
      return function(a:number,b:number){
        return a+b;
       }
    }
  }],
  bootstrap:[ FactoryProviderComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);


