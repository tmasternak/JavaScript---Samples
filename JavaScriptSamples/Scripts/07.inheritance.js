
var F = function () {
    this.name = 'name';
}

F.prototype = { surname: 'surname' }

var foo = new F();

alert(foo);


var FF = function () {
    this.address = 'address';
}

FF.prototype = new F();

var bar = new FF();

alert(bar);