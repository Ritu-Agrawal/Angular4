class Quax {
    private id: number;

    get Id(): number {
        return this.id;
    }

    set Id(id:number) {
       this.id = id;
    }

    constructor() {
        this.id = 0;
    }
}
var obj:Quax = new Quax();
obj.Id = 100; //Set Accesor Executes
console.log(obj.Id); //Get Accesor Executes