import 'rxjs/Rx'; 
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';


(function(){
    var source = new Observable((observer:Subscriber<number>)=>{
       var counter = 1;
        var id = setInterval(function(){
            try{
                if(counter <= 5){
                    observer.next(counter);
                    counter += 1;
                    if(counter==5) throw 'Error Occured';
                }
                else{
                    observer.complete();
                }
            }catch(error){
                observer.error(error);
            }
        },1000);
        
        return function(){
            console.log('disposal Called')
            clearInterval(id);
        }
    });
    source.subscribe(value=>console.log(value),error=>console.log("Error : "+error),()=>console.log("completed"));
})();