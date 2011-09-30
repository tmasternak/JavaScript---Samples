
//Module pattern - private members

var o = (function () {

    var privateValue = 'private';

    return {
        getValue: function () { return privateValue; }
    };
})();


alert(o.privateValue);
alert(o.getValue());


//Closure - variables are shared

var countDown = function (index) {

    var count = function () {
        if (index < 5) {
            index += 1;
            alert(index);
            setTimeout(count, 100);
        }
    };

    setTimeout(count, 100);
};

countDown(1);


//Closure - variables are shared gotcha

var x = (function () {

    var i;
    var func = [];

    for (i = 0; i < 3; i++) {

        func[i] = (function (i) { return function () { alert(i); }; })(i);
    };

    func[0]();
    func[1]();
    func[2]();
})();

