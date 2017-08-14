import { Component,enableProdMode,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DirectiveComponent } from './directive.component';

enableProdMode();

@Component({
  selector: 'my-app',
  template: `<h1>LifeCycle hooks</h1>
  <h4>OnInit and OnDestroy</h4>
  <button (click)="toggle()">Toggle</button>
  <hr/>
  <on-init *ngIf="display"></on-init>`
})

export class LifeCycleComponent{
	display:boolean;
	constructor(){
		this.display = true;
	}
	toggle(){
		this.display = !this.display;		
	}
}

@NgModule({
	imports:[ BrowserModule ],
	declarations:[ LifeCycleComponent,DirectiveComponent ],
	bootstrap:[ LifeCycleComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
  
  