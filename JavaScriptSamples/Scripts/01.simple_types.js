
var a = 5;
var b = a;
var a = a + 1;
var copied = (a !== b);

var sa = a.toString();
var sb = sa;
var sb = sb  + 'x';
copied = (sa != sb)

var o = {};
var ob = o;
ob.name = 'tom';
copied = (o.name != ob.name)





alert('end');