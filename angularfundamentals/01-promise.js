//var promise = Promise.resolve(5);
//var promise = Promise.reject('Error Occured');

var promise = new Promise(function(resolve,reject){
    resolve(5);
    //reject('Error Occured');
});

promise.then(function(data){
    console.log('Fullfilled: '+data);
},function(err){
     console.log('Rejected: '+err);
});