var fs=require('fs');
 
var buffer=fs.readFileSync(process.argv[2]);
var string =buffer.toString();

var count=0;
for(i=0;i<string.length;i++)
{
    if(string[i]=='\n')
        count++;
}
console.log(count);