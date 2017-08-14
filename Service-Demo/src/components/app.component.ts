import { Component, Inject, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { GuestService } from '../services/guest.service';
import { TestService } from '../services/test.service';

import { Guest } from '../models/guest';
import { Foo } from '../models/foo';

@Component({
    selector: 'my-app',
    templateUrl: './src/components/app.component.html'
})
export class AppComponent implements OnInit {
    guests: Guest[];
    foo: Foo;
    constructor(
        @Inject(CalculatorService) public serviceObj: CalculatorService,
        @Inject('squareNumber') private square: Function,
        @Inject('COMPANY_NAME') private company: string,
        @Inject(GuestService) public guestServiceObj: GuestService,
        @Inject(TestService) public testServiceObj: TestService) {
        console.log(serviceObj.addNumbers(5, 6));
        console.log(square(5));
        console.log(company);
        this.foo = {greet:'...'};
    }
    ngOnInit(): void {
        this.guestServiceObj.getAllGuests()
        .subscribe((guests:Guest[])=>{
            this.guests = guests;
        });
    }
    addGuest(guest:Guest):void{
        this.guestServiceObj.addGuest(guest).subscribe((newGuest:Guest)=>{
            this.guests.push(newGuest);
        });
    }
    setFoo(): void {
        this.testServiceObj.getTest()
            .subscribe((data: Foo) => {
                this.foo = data;
            });
    }
}