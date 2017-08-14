import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'filternumbers'
})
export class FilterNumbers implements PipeTransform{
    transform(items:number[],filter:string):number[]{
        var evenNumbers:number[] = [];
        var oddNumbers:number[] = [];
        items.forEach((item:number)=>{
            if(item % 2 == 0)
                evenNumbers.push(item);
            else
                oddNumbers.push(item);
        });
        if(filter == 'even')
            return evenNumbers;
        else    
            return oddNumbers;
    }
}