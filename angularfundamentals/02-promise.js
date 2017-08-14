var addNumbers = function (a, b) {
    var result;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            result = a + b;
            resolve(result);
        }, 1000);
    });
}
addNumbers(5,6).then(function(result){
    console.log('Result:'+result);
},function(err){
    console.log('Error:'+err);
});