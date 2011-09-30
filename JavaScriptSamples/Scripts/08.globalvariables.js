
//Global implicit variable
var globalMethod = function () { alert('global A'); }

window.globalMethod();

var globalMethod = function () { alert('global B'); }

window.globalMethod();
