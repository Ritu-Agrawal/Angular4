import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule }   from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


enableProdMode();

@Component({
  selector: 'my-app',
  template:`<div>
                <nav  class='nav navbar-default'>
                    <div class='container-fluid'>
                        <ul class='nav navbar-nav'>
                            <li routerLinkActive="active"><a [routerLink]="['/home']" >Home</a></li>
                            <li routerLinkActive="active"><a [routerLink]="['/about',id]">About</a></li>
                          </ul>
                    </div>
                </nav>
            <div>
            <div class="container">
                <router-outlet></router-outlet>
            </div>`
})

export class AppComponent {
    id:number = 100;
}

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'about/:id', component: AboutComponent }
];

@NgModule({
    imports:[ BrowserModule, RouterModule.forRoot(routes ,{ useHash: true })],
    declarations:[ AppComponent, HomeComponent, AboutComponent ],
    bootstrap:[ AppComponent ]
})
export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);