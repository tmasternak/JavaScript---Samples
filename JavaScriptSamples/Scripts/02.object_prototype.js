
var o = { name: 'sample name' };
Object.prototype.surname = 'sample surname';
Object.prototype.address = 'sample address';

var text = '';

for (propertyName in o) 
{
    text += propertyName + ': ' + o[propertyName] + '\r\n';    
}

address: sample address
surname: sample surname
name: sample name


alert(text);

text = '';

for (propertyName in o) 
{
    if (o.hasOwnProperty(propertyName)) 
    {
        text += propertyName + ': ' + o[propertyName] + '\r\n';
    }
}

alert(text);