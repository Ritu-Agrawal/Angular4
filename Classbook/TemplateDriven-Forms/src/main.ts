import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { Person } from './person'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
enableProdMode();

@Component({
  selector: 'my-app',
  templateUrl: 'src/template.component.html'
})

export class TemplateFormComponent {
	onSubmit(person: Person){
   	  alert("Name : "+person.name+" Age : "+person.age);
	}
}

@NgModule({
  imports:[ BrowserModule, FormsModule ],
  declarations:[ TemplateFormComponent ],
  bootstrap:[ TemplateFormComponent ]
})
class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);

  