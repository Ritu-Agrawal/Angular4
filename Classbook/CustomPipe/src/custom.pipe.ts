import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'changeCase'
})
export class CustomPipe implements PipeTransform {
     transform(value: string,args: string): string
     {
          if(args==="upper")
          return value.toUpperCase();
          else
          return value.toLowerCase();
     }
}


@Pipe({
    name:'fetchNumbers'
})
export class ArrayPipe implements PipeTransform {
     transform(numbers: number[],type: string): number[]
     {
        let evenNumbers:number[]=[];
        let oddNumbers:number[]=[];
        var size = numbers.length;
        for(let counter=0;counter<size;counter++){
        if(numbers[counter] %2== 0)
            evenNumbers.push(numbers[counter]);
        else
            oddNumbers.push(numbers[counter]);
        }
        if(type === "even")
            return evenNumbers;
        else
            return oddNumbers;
     }
}