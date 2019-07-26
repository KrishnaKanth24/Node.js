//Command line arguments 
//all command line arguments are received in an array called argv 
//it stores whatever you give as strings

//below code you enter your arguments and first two elements will be path of nodejs and second will be path of your file
//your script's interpreter and path are still considered arguments to the shell you're using.
//console.log(process.argv);

//if you dont want to print first 2 elements 
var myargs = process.argv.slice(2);
console.log("my argument given are:", myargs);

//lets perform some operation with command line arguments
//var result = parseInt(myargs[0]) + parseInt(myargs[1]);
//console.log("addition performed using command line arguments", result);

var fxp = require('fast-xml-parser');
var fs = require('fs');
fs.readdir("./xmlfolder", function(err, data1){
    console.log("The files we are going to scan is "+ data1.toString());
    data1.forEach(file =>{
        file1 = "xmlfolder\\"+ file; 
        fs.readFile(file1,"utf-8", function(err, data){
            if(!err & fxp.validate(data))
            {
                //console.log(data);
                var options = {
				        attributeNamePrefix: "_",
						attrNodeName: false,
						textNodeName: "#text",
						ignoreAttributes: false,
						ignoreNameSpace: false,
						allowBooleanAttributes: false,
						parseNodeValue: true,
						parseAttributeValue: false,
						trimValues: true,
						cdataTagName: "__cdata",
						cdataPositionChar: "\\c",
						localeRange: ""
					   };
                var jsonfile = fxp.parse(data, options);
                //we converted xml to json 
                //console.log(jsonfile);
                //console.log(jsonfile.CDF.UTILITYTYPE.D2.INSTPARAM.length);
        
                for(var i=0; i<jsonfile.CDF.UTILITYTYPE.D2.INSTPARAM.length; i++)
                {
                    if(jsonfile.CDF.UTILITYTYPE.D2.INSTPARAM[i]._CODE ==myargs[0])
                    {
                        console.log("The entered value was found in "+ file);
                        console.log("The value and unit found in : ");
                        console.log("VALUE: "+jsonfile.CDF.UTILITYTYPE.D2.INSTPARAM[i]._VALUE);
                        console.log("UNIT: "+jsonfile.CDF.UTILITYTYPE.D2.INSTPARAM[i]._UNIT);
                    }
                }
            }
        })
    })
})