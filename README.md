# Node.js
Node.js simple projects executed in windows 10 (v1903)

open-source javascript run-time environment that executes javascript code outside of a browser
major advantage is Non blocking asynchronous

What is runtime environment?
in javascript we use button onclick="func()" so when the browser is running a code is executed when user does something

lets us use javascript to write command line tools and for server side scripting
node.js does not say node(file name with a extension of .js(javascript)) but rather it is a product as a whole
does not execute code from top to bottom ...it executes everything at the same time 
node.js is primarily used to build web servers
node.js allows for real time web application with push capability
Node.js also has the ability to embedded external functionality or extended functionality by making use of custom modules
one such custom module is mongoDB

the major difference between node.js and php is most functions in php block until completion while
node.js functions are no-blocking (they run concurrently or in parallel)

npm(node package manager) is the package manager for node.js designed to simply installation and updation 	
it comes bundled with node.js

What is a package manager?
A package manager is a collection of software tools that automates process of installing, upgrading, configuring, and removing programs for a computers operating system.

What is modules in node.js ?
modules are folders(inside folders, there are files with .js extension) 
you can include a module into your file

npm takes care of installing/updating/uninstalling any third party modules to node.js

chrome v8 javascript engine on top of it C++ program and u get node.js 

Questions and answer
--node.js runs on server
--Node.js terminal (REPL(Read-Eval-Print-Loop)) is used for testing node.js/JavaScript expressions
--default scope in node.js application is local
--node.js application runs on single thread 
--GUI-based debugging tool for Node.js is Node Inspector
--web application frameworks for Node.js are Express.js Geddy Locomotive
--types of application can be built using Node.js are Web Application Chat Application RESTful Serrvice
--template engines can be used with Node.js are Jade Vash Handlebars
--tool automates various tasks of Node.js application are gruntJS
--Node.js application can access which of the following databases NoSQL databases Relational databases

what is REPL  AKA node shell 
can be used to test simple javascript codes
you can define variable and perform calculations on them
repl will not execute node.js files 

if you want to execute files use CMD prompt  write node path\filename.js

What is node.js framework?
A Node.js framework is just some abstract design, built out of Node.js, that embodies the control flow of the given 
framework’s design. So it is almost like the skeleton of a program whereby the customised codes you write kind of 
makes up as the meat that completes the program.

So for every Node.js function, there would be some generic implementation unique to the framework which would 
then require the user to follow the lead of the framework by adding more codes to define its use case.

Difference between Package and modules in nodejs?
Modules are libraries for node.js
you can load a module in your nodejs file using require() function.
a package is one or more modules(libraries) grouped together and used by other packages or project of yours
a package is described by package.json file
modules will be installed, if listed as dependencies in the package.json
Actually npm installs all the packages into node_modules which is confusing, because it should be node_packages.

what are dependencies ? 
your module which is inside a package needs another module or bunch of modules(package)
then you will include that module or package in your dependencies list inside package.json file under your package 
install the dependency after creating a package.json file (npm will automatically update dependencies column
after you install modules for your package) 
install the dependency inside your package (eg: E:\nodekk> npm install fast-cml-parser)


Why do you need package.json file ?
npm registry contains packages many are node modules or contain node modules
package is a file or directory that is described by package.json file
A package must contain package.json file in order to be published to the npm registry
modules are not required to have package.json, not all modules are packages 
only modules that have a package.json file are also packages
package.json contains all information of your web application. it contains all metadata

What is JSON file
JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
We can also convert any JSON received from the server into JavaScript objects.
This way we can work with the data as JavaScript objects, with no complicated parsing and translations.
var x = {name: "John", age: 31, city: "New York"} ==>this is javascript obj
var y = '{"name":"John", "age":31, "city":"New York"}' ==> this is JSON
Syntax
Data is in name/value pairs or key/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays
