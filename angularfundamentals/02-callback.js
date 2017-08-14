var addNumbers = function(a,b,fn){
    var result;
    setTimeout(function(){
        result = a + b;
        fn(result);
    },1000);
}

addNumbers(4,5,function(data){
    console.log(data);
});
