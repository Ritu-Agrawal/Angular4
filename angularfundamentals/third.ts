class Foo {
    private id: number;
    private name: string;

    constructor() {
        this.id = 100;
        this.name = 'Guest';
    }

    printDetails(): void {
        console.log(`Id: ${this.id} Name: ${this.name}`);
    }
}

var fooObj: Foo = new Foo();
fooObj.printDetails();
