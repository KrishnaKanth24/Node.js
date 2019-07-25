var fxp = require('fast-xml-parser');
var fil = require('fs');

fil.readFile("sample.xml","utf-8", function(err, data){
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
        var gto = fxp.getTraversalObj(data, options);
        console.log("getTraversalObject is used")
        console.log(gto);
        
         var temp = fxp.convertToJson(gto, options);
        console.log("printing temp convertToJson func applied on o/p of parse func")
         console.log(temp);
    }
});