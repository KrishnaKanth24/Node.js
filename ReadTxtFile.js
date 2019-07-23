const fs = require('fs');
fs.readFile('one.txt','utf-8' ,function(err, data){
            if(err) console.log(err);
  console.log(data);
});