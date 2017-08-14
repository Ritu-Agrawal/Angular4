/*Basic types in TypeScript*/
var personAge: number = 7;
var personName: string = 'Logith';
var activeStatus: boolean = true;
enum Salutatation { Mr, Ms, Mrs, Dr };
var title: Salutatation = Salutatation.Mr;
function sayHi(name: string): void {
    console.log(`Hi : ${name}`);
}
sayHi('Karthik');
