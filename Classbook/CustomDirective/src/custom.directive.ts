import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})

export class CustomDirective {
	@HostBinding('attr.role') role="guest";
	
	 @HostListener('click', ['$event'])
	 onClick(e:any) {
		this.role=this.role=="guest"?"admin":"guest";
		e.target.innerText =this.role;
	}
}
