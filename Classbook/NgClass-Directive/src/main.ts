import { Component,NgModule,enableProdMode  } from '@angular/core';
import { NgClass  } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
enableProdMode();

@Component({
  selector: 'my-app',
  template: `<button  [ngClass]="{active: isOn}"
         (click)="toggle(!isOn)">
         Click me!
     </button>`,
  styles: ['.active { background-color: yellow;}']
})

export class NgClassComponent {
	isOn:boolean = false;
  isDisabled:boolean = false;
	toggle(newState:any):void {
		if (!this.isDisabled) {
			this.isOn = newState;
		}
	}
}

@NgModule({
	imports:[ BrowserModule ],
	declarations:[ NgClassComponent ],
	bootstrap:[ NgClassComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);