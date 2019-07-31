const http = require('http');

const server = http.createServer((request, response) =>{
    
    console.log(request.url);
    
    if(request.url === '/'){
       //you can even give a file using fs module put it in a var and display it 
        return response.end("THE HOME PAGE");
    
    }else if(request.url === '/about'){
        
        return response.end("About page");
    
    }else if(request.url === '/contact'){
        return response.end("The Contact Page")
    
    }else{
        response.writeHead(404);
        response.end("THE PAGE WAS NOT FOUND");
    }
})
server.listen(3000,() =>{console.log("Server Listening of port 3000")});