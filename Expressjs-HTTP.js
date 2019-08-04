const express = require('express');
const path = require('path');
const app= express();

const mongoose = require('mongoose');

//lets say that you are trying to access localhost:3000/ 
//this will fetch index.html 
//but inside index.html it can contain css , scripts 
//to load that, we are saying these css and script files are inside public folder in the present directory
//any assest(css or scripts or images) is in public folder 
//app.use(express.static('public'));

mongoose.connect('mongodb://localhost/krishnadatabase');

app.get('/',(request, response)=>{
    
    //create index.html in the same folder
    //this is how server side works
    response.sendFile(path.resolve(__dirname,'index.html'))
        
})
app.get('/contact',(request, response) =>{
    
    //it takes javascript object and converts to json 
    //so now you see we achieved it super easy 
    //server to client in json format 
    response.json({
        name:"krishna",
        alias:"kk"
    })
})
app.listen(3000);