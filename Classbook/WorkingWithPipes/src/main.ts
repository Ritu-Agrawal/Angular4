import { Component,NgModule,enableProdMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
enableProdMode();

@Component({
  selector: 'my-app',
  template: `<div>
	<h1>Working with in-built Pipe(Filters)</h1>
	<hr/>
	<h2>{{ name | uppercase }}<h2>
  <h2>{{ today | date : "dd,EEEE MMMM yyyy" | uppercase }}<h2>
  <div>`
})

class PipeComponent{
	name:string ="Karthik";
  today = new Date();
}

@NgModule({
	imports:[ BrowserModule ],
	declarations:[ PipeComponent ],
	bootstrap:[ PipeComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
  