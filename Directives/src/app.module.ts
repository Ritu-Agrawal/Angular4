import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { FormsModule } from '@angular/forms';
import { CgHover } from './directives/cghover.directive';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, CgHover],
    bootstrap: [AppComponent]
})
export class AppModule { }