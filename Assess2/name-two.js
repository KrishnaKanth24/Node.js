//converting JSON strings into Excel file
var j2e = require('json2xls');
var fxp = require('fast-xml-parser');
var fs = require('fs');

var xmlfolderlocation = "./a";
fs.readdir(xmlfolderlocation, "utf8", function(err, data1){
    console.log("The list of files in xml folder are: ");
    console.log("List of files in 'a' folder is: "+data1.toString());
    
    data1.forEach(file =>{    
        
        file1 = "./a\\"+ file;
        fs.readFile(file1, "utf-8", function(err, data){
      
            if(!err & fxp.validate(data) ){
        
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
                
               console.log(jsonfile.UTILITYTYPE.D2.INSTPARAM);
                
                var xls = j2e(jsonfile.UTILITYTYPE.D2.INSTPARAM);
                
                var filename = jsonfile.UTILITYTYPE.D1.G1.toString() + ".xlsx";
                console.log("The value contained in G1 tag is: " + filename +" present in: "+file);
                
                fs.writeFileSync(filename, xls, 'binary');
            }
        })
    })
})
