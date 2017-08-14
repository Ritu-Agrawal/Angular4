import { Component, NgModule, enableProdMode,Inject} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { pinCodeValidator } from './pincode.validator';

enableProdMode();

@Component({
  selector: 'my-app',
  templateUrl: 'src/model.component.html'
})

export class ModelFormComponent {
  sampleForm : FormGroup;
  pincodeControl:FormControl;

  constructor(@Inject(FormBuilder) private builder:FormBuilder){
    this.builtForm();
  }
  private builtForm(){
    this.sampleForm = this.builder.group({
     pincodeControl:new FormControl('560066',Validators.compose([
       Validators.required,pinCodeValidator
     ]))
    });
    this.pincodeControl = this.sampleForm.controls['pincodeControl'] as FormControl;
  }
 
}

@NgModule({
  imports:[ BrowserModule, ReactiveFormsModule ],
  declarations:[ ModelFormComponent ],
  bootstrap:[ ModelFormComponent ]
})
class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);

  