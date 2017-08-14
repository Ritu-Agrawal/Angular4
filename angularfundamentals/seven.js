function printName(firstName, middleName, lastName) {
    if (lastName === void 0) { lastName = 'Ibrahim'; }
    if (middleName === undefined) {
        console.log(firstName + " " + lastName);
    }
    if (middleName) {
        console.log(firstName + " " + middleName + " " + lastName);
    }
}
printName('Ashik');
printName('Ashik', 'Mohammad');
