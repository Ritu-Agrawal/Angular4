import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent } from './components/app.component';
import { CalculatorService } from './services/calculator.service';
import { GuestService } from './services/guest.service';
import { TestService } from './services/test.service';


@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [CalculatorService,GuestService,TestService,
        {
            provide: 'squareNumber',
            useFactory: function () {
                return function (n: number) {
                    return n * n;
                }
            }
        },
        {
            provide: 'COMPANY_NAME',
            useValue: 'CAPGEMINI INDIA PRIVATE LIMITED'
        }
    ]
})
export class AppModule { }