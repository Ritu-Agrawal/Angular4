import { Component } from '@angular/core';

@Component({
  selector: 'my-directive',
  template:'<div><h2>{{ msg }}</h2></div>'
})

export class ComponentDirective {
	msg:string="Message from Component Directive";
}

