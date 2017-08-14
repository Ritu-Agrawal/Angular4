import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app.component';
import { SampleComponent } from './components/sample.component';
import { DemoComponent } from './components/demo.component';



@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, SampleComponent,DemoComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }