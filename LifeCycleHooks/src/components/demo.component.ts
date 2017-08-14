import { Component,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector:'cg-demo',
    template: `<div class='well'>
        <h2>Demo Component</h2>
        <span>{{' First Name : '+firstName}}</span>
        <span>{{' Last Name : '+lastName}}</span>
    </div>`,
    inputs:['firstName','lastName']
})
export class DemoComponent implements OnChanges{
  firstName:string;
  lastName:string;
  ngOnChanges(changes:SimpleChanges):void{
      console.log(changes);
  }
}