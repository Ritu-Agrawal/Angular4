import {Directive,HostBinding,HostListener} from '@angular/core';

@Directive({
    selector:'[data-cg-hover]'
})
export class CgHover{
    @HostBinding('title') titleProperty:string;
    constructor(){
        this.titleProperty = 'Bounded with Button Title';
    }

    @HostListener('mouseenter',['$event.target'])
    cgMouseHover(element:HTMLElement):void{
        var styleClass = element.attributes.getNamedItem('data-custom-style').value;
        this.titleProperty = `${styleClass} applied`;
        element.classList.add(styleClass);
    }

    @HostListener('mouseleave',['$event.target'])
     cgMouseLeave(element:HTMLElement):void{
         var styleClass = element.attributes.getNamedItem('data-custom-style').value;
          this.titleProperty = `${styleClass} removed`;
        element.classList.remove(styleClass);
    }
   
}