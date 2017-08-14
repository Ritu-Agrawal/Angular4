import { Component,NgModule,enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomPipe, ArrayPipe } from './custom.pipe';

enableProdMode();

@Component({
    selector:'my-app',
    template:`<div>
        <h1>Custom Pipe</h1>
        <hr/>
        <h2>{{ name | changeCase:"lower" }}</h2>
        <h2>{{ numbers | fetchNumbers:"odd" }}</h2>
     </div>`
})
class CustomPipeComponent{
    name:string="KARTHIK";
    numbers:number[] = [1,2,3,4,5,6,7,8,9,10];
}
@NgModule({
    imports:[ BrowserModule ],
    declarations:[ CustomPipeComponent,CustomPipe, ArrayPipe ],
    bootstrap:[ CustomPipeComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);