//fs module which contains all the functionality to create streams
//Streams are collections of data — just like arrays or strings.
//The difference is that streams might not be available all at once, and they don’t have to fit in memory. 
//This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.
//suppose your text file is 100mb and if u use readFile it will take 100mb and store it in RAM which occupies a lot of memory
//so streams take small amount of data and does the job 
//They also allow us to pick and choose which parts of the file we want to process and leave the rest of the data unopened.
//dealing with text files of greater size than around 10MB, it’s best to ditch readFile and start using streams instead.
//There are four fundamental stream types in Node.js: Readable, Writable, Duplex, and Transform streams
//https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/
var fs = require('fs');
//all streams are instances of EventEmitter
//we create a readable stream using createReadStream function
var readfilestr = fs.createReadStream("filestream.txt");

// .on is an event handler that when a data is 
//encountered on the stream, it invokes a call
//back function and puts those data into target
readfilestr.on("data",function(target){
    
    //code below: you are converting data coming in the stream from the file to string and then printing it
    //we are taking a chunk of data which is read from the data stream and converting it to a string
    var chunk = target.toString();
    
    //this is event emitter
    //manually triggering the event 
    eveEmit.emit('captured');
    
    console.log("reading a file using streams");
    console.log(chunk);
})

//traditional fileRead 
/*
console.log("reading a file using traditional readFile function");  
fs.readFile("filestream.txt", function(err, data){
    if(!err) console.log(data.toString());
})
*/

//Transform streams sit between Readable and Writable streams in the pipeline

//now writing to a file 
/*
var writefilestr = fs.createWriteStream("filestream.txt");

//i am going to attach a event listener to the createWriteStream
//what it does is when it finished writing the file 'end' will be at the end of file by default we are going to make 'end' as an event emitter and create an event listener to let us know that writing of the file is completed;
writefilestr.on('end', ()=>{console.log("File writing is completed, performed using events");});

writefilestr.write("writing it from nodejs")
writefilestr.write("will it overwrite everything ? ")
*/

//using pipes
/*
 var pipetransfer1 = fs.createReadStream("filestream.txt");
var piptransfer2 = fs.createWriteStream("filestreamCopyUsingPipes.txt");

//Data is read by the Readable stream and then pushed in chunks to the Writable stream. 
pipetransfer1.pipe(piptransfer2);
*/

//using Events
//an event is something that happens. For example, if a connection is established to a database, 
//then the database connection event is triggered. Event driven programming is to create functions 
//that will be triggered when specific events are triggered.
//there are two events 
// event emitter
// event listener
var myeve = require('events');
var eveEmit = new myeve.EventEmitter();
//this is event listener
eveEmit.on('captured',function(){
    console.log("event successfully captured");
    //eveEmit.once('captured', functio...)
    //will trigger the callback func only the first time it is called second when the event is triggered it will not call 
    
});