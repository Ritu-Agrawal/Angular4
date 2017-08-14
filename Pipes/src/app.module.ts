import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { ChangeCasePipe } from './pipes/change.case.pipe';
import { FilterNumbers } from './pipes/filter.numbers.pipe';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,ChangeCasePipe,FilterNumbers],
    bootstrap: [AppComponent]
})
export class AppModule { }