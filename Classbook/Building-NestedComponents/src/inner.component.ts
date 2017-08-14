import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'my-directive',
  template:`<div>
			<h1>{{receiver.msg}}</h1>
			<hr/>
			<h2>{{msg}}</h2>
			<button (click)="onMyEvent()">Event</button>
		</div>`
})

export class InnerComponent {
	msg:string="Message from Nested Component";
	greet:string="Hi from Nested Component"
	@Input('receiveAlternate') receiver:any;
	@Output() myevent = new EventEmitter();
	onMyEvent(){
		alert('Button Clicked in InnerComponent');
		this.myevent.emit(this.greet);
	}
}

