var fs = require('fs');
var contents = fs.readFileSync('./package.json', 'utf8');
var obj = JSON.parse(contents);
var version = obj.version.split('.');
version[2] ++;
obj.version = version.join('.');
contents = JSON.stringify(obj, null, 4);
fs.writeFileSync('./package.json', contents);
console.log('Bump version to ' + obj.version)