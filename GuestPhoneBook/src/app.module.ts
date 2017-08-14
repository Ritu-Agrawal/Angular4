import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './about.component';
import { ContactComponent }  from './contact.component';
import { NotFoundComponent }  from './not-found.component';
import { AppRoutingModule }  from './app-routing.module';
import { GuestsModule } from './guests/guests.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, GuestsModule ],
  declarations: [ AppComponent,AboutComponent,ContactComponent,NotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}