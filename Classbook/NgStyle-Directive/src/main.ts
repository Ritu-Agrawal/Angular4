import { Component,NgModule,enableProdMode  } from '@angular/core';
import { NgStyle  } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
enableProdMode();

@Component({
  selector: 'my-app',
  template: `<h1 [ngStyle]="{'font-style': style, 'font-size': size, 'font-weight': weight}">
     Change style of this text!
   </h1>
   <hr>
   <label><input type="checkbox" (change)="changeStyle($event)">Italic</label>
   <label><input type="checkbox" (change)="changeWeight($event)">Bold</label>
   <label>Size: <input type="text" [value]="size" (change)="size = $event.target.value"></label>`,
 })

export class NgStyleComponent {
	style:string = 'normal';
	weight:string = 'normal';
	size:string='20px';
	changeStyle($event: any){
		this.style = $event.target.checked ? 'italic' : 'normal';
	}
	changeWeight($event: any) {
     this.weight = $event.target.checked ? 'bold' : 'normal';
   }
}

@NgModule({
	imports:[ BrowserModule ],
	declarations:[ NgStyleComponent ],
	bootstrap:[ NgStyleComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);