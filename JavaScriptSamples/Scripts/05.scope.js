
var a = 0;

var outerFun = function () {

    var innerFun = function () {
        alert(a + 3);
    };

    var a = 1;

    innerFun();
};

outerFun();