import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { InnerComponent } from './components/inner.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,InnerComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }