var sh = require('moment');

//var x = new Date();
//console.log(x);
//console.log(JSON.stringify(x));
//var y = sh(x,"MM-DD-YYYY").year();
//console.log(y);

var fxp = require('fast-xml-parser');
var fil = require('fs');

fil.readFile("xmltojson.xml","utf-8", function(err, data){
    if(!err & fxp.validate(data)){        
        console.log("Raw XML but still maintaining the presentation variable")
        console.log(data);
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
        var obj = fxp.parse(data, options);
        //incomplete due to other work
        var temp = sh(obj.CD);
    }
});