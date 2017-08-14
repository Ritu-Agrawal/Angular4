import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`
        <div>
            <h1 class="well">Guest Phonebook Application</h1>
            <nav  class='nav navbar-default'>
                <div class='container-fluid'>
                    <ul class='nav navbar-nav'>
                        <li routerLinkActive="active"><a routerLink="/guests">Application</a></li>
                        <li routerLinkActive="active"><a routerLink="/about">About US</a></li>
                        <li routerLinkActive="active"><a routerLink="/contact">Contact US</a></li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>`
})
export class AppComponent{}