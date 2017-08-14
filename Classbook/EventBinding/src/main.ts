import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
enableProdMode();

@Component({
  selector: 'my-app',
  template: `<div>
	<button (click)='showOrHide()'>Show / Hide Image</button>
	<div *ngIf="show">
		<hr/>
		<img [src]='photoUrl' title={{id}} alt="{{name+'.jpg'}}" [style.width.px]="50"/>
	</div>
  <div>`
})

export class EventBindingComponent {
	id:number = 714709;
	name:string ="Karthik";
	photoUrl:string="images/karthik.jpg";
	show:boolean = true;
	showOrHide():void{
		this.show = !this.show;
	}
}

@NgModule({
	imports:[ BrowserModule ],
	declarations:[ EventBindingComponent ],
	bootstrap:[ EventBindingComponent ]
})
export class AppComponent{}

platformBrowserDynamic().bootstrapModule(AppComponent);

  