var generateRandomNumber = function(){
    var randomNumber;
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            try{
                console.log('Executed');
                randomNumber = Math.round(Math.random()*10);
                if(randomNumber>=5)
                    resolve(randomNumber);
                else
                    throw 'NumberLessThanFiveException:'+randomNumber;
            }
            catch(err){
                reject(err);
            }
        },1000);
    });
}
/*generateRandomNumber().then(function(randomNumber){
    console.log('Number Generated:'+randomNumber);
},function(err){
    console.log('Error:'+err);
});*/
var promiseObj = generateRandomNumber();
execute01(promiseObj);
execute02(promiseObj);

function execute01(promiseObj){
    promiseObj.then(function(randomNumber){
        console.log('Execute 01:'+randomNumber);
    },function(err){
        console.log('Execute 01:'+err);
    });
}

function execute02(promiseObj){
    promiseObj.then(function(randomNumber){
        console.log('Execute 02:'+randomNumber);
    },function(err){
        console.log('Execute 02:'+err);
    });
}

































