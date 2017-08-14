import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
    selector:'cg-sample',
    template: `<div class='well'>
        <h2>Sample Component</h2>
    </div>`
})
export class SampleComponent implements OnInit, OnDestroy{
    constructor(){
        console.log('SampleComponent - Constructor Invoked');
    }
    ngOnInit(): void{
        console.log('SampleComponent - Init');
    }
    ngOnDestroy(): void{
        console.log('SampleComponent - Destroy');
    }
}