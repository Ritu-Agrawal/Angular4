import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Person } from './person'

enableProdMode();

@Component({
  selector: 'my-app',
  templateUrl: 'src/model.component.html'
})

export class ModelFormComponent {
  personForm : FormGroup;
  person:Person;
  
  constructor(){
    this.builtForm();
  }
  private builtForm(){
    this.personForm = new FormGroup({
      personName : new FormControl("Karthik"),
      personAge: new FormControl(21)
    }); 
  }
  
   onSubmitForm(){
    this.person = this.personForm.value;
     alert("Name : "+this.person.personName+" Age : "+this.person.personAge);
	}
}

@NgModule({
  imports:[ BrowserModule, ReactiveFormsModule ],
  declarations:[ ModelFormComponent ],
  bootstrap:[ ModelFormComponent ]
})
class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);

  