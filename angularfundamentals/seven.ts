function printName(firstName:string,
    middleName?:string, lastName='Ibrahim'){
        if(middleName===undefined){
            console.log(`${firstName} ${lastName}`);
        }
        if(middleName){
            console.log(`${firstName} ${middleName} ${lastName}`);
        }
}
printName('Ashik');
printName('Ashik','Mohammad');

