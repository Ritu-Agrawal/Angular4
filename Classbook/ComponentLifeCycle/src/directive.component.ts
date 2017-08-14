import { Component,OnInit,OnDestroy, enableProdMode } from '@angular/core';


@Component({
  selector: 'on-init',
  template: "<div>Init/Destroy</div>"
})

export class DirectiveComponent implements OnInit,OnDestroy{
  constructor(){
    console.log("DirectiveComponent : Constructor Invoked");
  }
  ngOnInit(): void{
    console.log("DirectiveComponent : OnInit Executed");
  }
  ngOnDestroy(): void{
    console.log("DirectiveComponent : OnDestroy Executed");
  }
 
}


  