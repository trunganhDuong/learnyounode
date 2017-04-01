var fs=require('fs');
var path=require('path');
var filepath=process.argv[2];

var read=function(filepath){
    fs.readdir(filepath,function(err,list){
    if(err!= null)
    {
        console.log(err);
        return;
    }
    list.forEach(function(item){
        if(fs.statSync(filepath+'/'+item).isDirectory())
        {
            read(filepath+'/'+item);
        }
        else if(path.extname(item)===process.argv[3])
        console.log(item);
    });
});
}
read(filepath);


