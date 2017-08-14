import { Component, NgModule, enableProdMode,Inject} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms'
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
  personName:FormControl;

  constructor(@Inject(FormBuilder) private builder:FormBuilder){
    this.builtForm();
  }
  private builtForm(){
    this.personForm = this.builder.group({
     personName:new FormControl('Karthik',Validators.compose([
       Validators.required,
       Validators.minLength(4),
       Validators.maxLength(8),
       Validators.pattern(/^[a-z]+$/i)
     ])),
     personAge:new FormControl(21)  
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

  