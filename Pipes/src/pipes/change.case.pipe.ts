import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'changecase'
})
export class ChangeCasePipe implements PipeTransform{
    transform(data: string, whichCase:string): string{
        var result = data;
        if(whichCase=='upper')
            result = data.toUpperCase();
        if(whichCase =='lower')
            result = data.toLowerCase();
        return result;
    }
}