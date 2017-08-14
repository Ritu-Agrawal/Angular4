import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

/*var observableFromObj:Observable<number> = Observable.from([1,2,3,4]);
observableFromObj.subscribe((data:number)=>{
    console.log('Data Recieved: '+data);
},(err)=>{
    console.log('Error: '+err);
},()=>{
    console.log('Task Completed Successfully');
});*/

/*var promiseOne = Promise.resolve(4);
//var promiseTwo = Promise.resolve(8);
var promiseTwo = Promise.reject('Error Occured');
var promiseThree = Promise.resolve(12);
var allPromise = Promise.all([promiseOne,promiseTwo,promiseThree]);

var observableObj:Observable<number[]> = Observable.fromPromise(allPromise);
observableObj.subscribe((numbers:number[])=>{
    numbers.forEach(function(n:number){
        console.log('Data Recieved:'+n);
    });
},(err:string)=>{
    console.log('Error :'+err);
});*/
/*
var observableObjEvent:Observable<MouseEvent> = Observable.fromEvent(document,'mousemove');
observableObjEvent.subscribe((event:MouseEvent)=>{
    document.getElementById('target').innerHTML = `<h3> X:${event.x} Y:${event.y} </h3>`
});*/
/*var observableObjOf:Observable<number> = Observable.of(1,2,3,4,5);
observableObjOf.subscribe((data:number)=>{
    console.log('Data Recieved: '+data);
});*/
/*Observable.interval(1000).skip(2).take(5).subscribe((data:number)=>{
    console.log('Data Recieved: '+data);
},null,()=>{
    console.log('Completed');
});*/
/*
Observable.from([1,2,3,4])
    .map(n=>n*10)
    .subscribe((data:number)=>{
        console.log('Data:'+data);
    });*/

/*var first = Observable.interval(1000).take(4);
var second = Observable.interval(1000).take(2);
first.concat(second).subscribe((data:number)=>{
    console.log('Data:'+data);
});*/


/*let observableObj:Observable<number> =Observable.range(5,5).delay(3000)
observableObj.subscribe((result: number)=>{
    console.log(result);
});*/

/*Observable.from([10,20,30,40])
    .findIndex((number)=> number > 20)
    .subscribe((result:number)=>{
        console.log('Index > 20 : '+result);
    });*/

/*Observable.from([1,2,3,4])
    .map((number)=> number * 10)
    .subscribe((result:number)=>{
        console.log('Multipled by 10 : '+result);
    });*/

/*Observable.from([434,545232,653,5445,212,44,44,32,66,322,434])
    .distinct()
    .subscribe((result:number)=>{
        console.log('Distinict Number : '+result);
    });*/


/*Observable.interval(2000) 
.merge(Observable.interval(1000))
.subscribe((result:number)=>{
       console.log('Merged Number : '+result);
});*/

/* Operators */
/*(function(){
    //Mathematical Operators
    Observable.from([17,2,31,4,5]).max().subscribe(val=>{console.log("Max : "+val)});
    Observable.from([1,2,31,-4,5]).min().subscribe(val=>{console.log("Min : "+val)});
    Observable.from([1,2,31,4,5]).count().subscribe(val=>{console.log("Count : "+val)});
    Observable.from([1,2,3,4,5]).reduce((x,y)=>x*y).subscribe(val=>{console.log("Reduce : "+val)});
    
    //Boolean Operators 
    Observable.from([66,2,32,4,58]).every(val=>val%2===0).subscribe(val=>{console.log("Every : "+val)});
    Observable.from([66,2,32,41,58]).sequenceEqual(Observable.from([66,2,32,41,58])).subscribe(val=>{console.log("Sequence : "+val)});
    
   // Filtering Operators 
    Observable.from([1,2,5,2,5]).distinct().subscribe(val=>{console.log("Distinct : "+val)});
    Observable.from([1,2,5,2,7]).elementAt(2).subscribe(val=>{console.log("ElementAt : "+val)});
    Observable.from([32,75,21,44,55]).filter(x=>x%2==0).subscribe(val=>{console.log("Filter : "+val)});
    Observable.from([31,75,21,44,55]).find(x=>x%2==0).subscribe(val=>{console.log("Find : "+val)});
    Observable.from([32,75,21,44,55]).first().subscribe(val=>{console.log("First : "+val)});
    Observable.from([32,75,21,44,55]).skip(4).subscribe(val=>{console.log("Skip : "+val)});
    Observable.from([32,75,21,44,55]).take(2).subscribe(val=>{console.log("Take : "+val)});
    Observable.from([{id:1,name:'Karthik'},{id:2,name:'Ganesh'}]).pluck('name').subscribe(val=>{console.log("Pluck : "+val)});
    
   //Transforming Operators 
    Observable.from([22,47,88]).delay(10).subscribe(val=>{console.log("Delay : "+val)});
    Observable.from([22,47,88]).findIndex(x=>x>40).subscribe(val=>{console.log("FindIndex : "+val)});
    Observable.from([1,2,3]).map(x=>x*2).subscribe(val=>{console.log("Map : "+val)});
    
   //Combining Operators
    Observable.from([1,2,3]).concat(Observable.from([4,5])).subscribe(val=>{console.log("Concat : "+val)});
    Observable.interval(2000).take(2).merge(Observable.interval(1000).take(2)).subscribe(val=>{console.log("Merge : "+val)});
    
    Observable.of('Hi').subscribe(v=>{Observable.of(v+' Everyone').subscribe(v=>{console.log(v)})});
    //Recommended
    Observable.of('Hi').mergeMap(v=>{return Observable.of(v+' Everyone')}).subscribe(v=>{console.log(v)});
})();*/

/*var observableObj = new Observable(function(observer:Subscriber<number>){
    observer.next(4);
    observer.next(8);
    observer.error('Error Occured in Observable');
    observer.next(12);
    observer.complete();
}).subscribe((data)=>{
    console.log(data);
},(err)=>{
    console.log('Error:'+err);
},()=>{
    console.log('Task Completed');
});*/


var observableObj = new Observable((observer:Subscriber<number>)=>{
    var randomNumber;
    setInterval(()=>{
        try{
            randomNumber = Math.round(Math.random()*10);
            if(randomNumber>=2)
                observer.next(randomNumber);
            else if(randomNumber==0)
                throw 'Custom Exception Occured: '+randomNumber;
            else
                observer.complete();
        }catch(err){
            observer.error(err);
        }
    },1000);
});

function subsribe01(obj:any){
    console.log('Subscribe 01 Started');
    obj.subscribe((data:number)=>{
        console.log('Subscribe 01 Random Number: '+data);
    },(err:string)=>{
        console.log('Subscribe 01 Error: '+err);
    },()=>{
        console.log('Subscribe 01 Task Completed Successfully');
    });
}

function subsribe02(obj:any){
    console.log('Subscribe 02 Started');
    obj.subscribe((data:number)=>{
        console.log('Subscribe 02 Random Number: '+data);
    },(err:string)=>{
        console.log('Subscribe 02 Error: '+err);
    },()=>{
        console.log('Subscribe 02 Task Completed Successfully');
    });
}

subsribe01(observableObj);
subsribe02(observableObj);

   




