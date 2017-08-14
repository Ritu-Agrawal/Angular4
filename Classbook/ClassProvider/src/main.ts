import { Component,Inject, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Person } from './models/Person';
enableProdMode();

@Component({
  selector: 'my-app',
  template: `<h1>Class Provider Demo</h1>`,
  providers: [ Person ]
 // providers: [{ provide:'Human', useClass: Person} ]
})

export class ClassProviderComponent {
  constructor(@Inject(Person) private person: Person){
	//constructor(@Inject('Human') private person: Human){
		console.log("Name : "+this.person.name+" Age : "+this.person.age);
	}
}

@NgModule({
  imports:[ BrowserModule ],
  declarations:[ ClassProviderComponent ],
 // providers: [{ provide:'Human', useClass: Person} ],
  bootstrap:[ ClassProviderComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
  