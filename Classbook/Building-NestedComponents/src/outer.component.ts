import { Component } from '@angular/core';
import { InnerComponent } from './inner.component';

@Component({
	selector: 'my-app',
	template:'<my-directive [receiveAlternate]="details" (myevent)="onMyEvent($event)"></my-directive>',
})

export class OuterComponent {
	details = {
		msg:'Message Initially sent from Outer Component to Inner Component'
	}
	onMyEvent(greet:any){
		this.details.msg = "Message Received from Inner Component : "+ greet;
	}
}