
//Function definition
var sampleFun = function () {
    alert(this.name);
}

//Method invocation
var o1 = {};
o1.name = 'literal';
o1.f = sampleFun;
o1.f();

//Function invocation
var name = 'global';
sampleFun();

//Constructor invocation
var o2 = new sampleFun();

//Apply invocation
var fakeThis = {};
fakeThis.name = 'fake this';
sampleFun.apply(fakeThis);



var initializeBetter = function () {

    var MyHandler = (function () {

        var that = {};

        that.name = 'handler';
        that.handle = function () {
            alert(that.name);
        };

        return that;
    })();

    document.getElementById('b').onclick = MyHandler.handle;
};



var initialize = function () {

    var MyHandler = {

            name: 'handler',
            handle: function () {
                alert(this.name);
            }
    };

    document.getElementById('b').onclick = MyHandler.handle;
};


window.onload = initializeBetter;
