(function(){
    console.log('One');
    console.log('Two');
    setTimeout(function(){
        console.log('Three');
    },2000);
    setTimeout(function(){
        console.log('Five');
    },0);
    console.log('Four');
})();



