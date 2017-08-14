interface ISample{
    print(name:string):void;
}

class Sample implements ISample{
    print(name:string):void{
        console.log(`Name: ${name}`);
    }
}

interface Person{
    name: string,
    age: number
}
function printDetails(obj:Person){
    console.log(`${obj.name} ${obj.age}`);
}
printDetails({name:'Karthik',age:30});
