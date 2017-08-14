import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { LeftComponent } from './components/left.component';
import { RightComponent } from './components/right.component';
import { MiddleComponent } from './components/middle.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,LeftComponent,MiddleComponent,RightComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }