//installed xml-fast-parser using npm 
//added as dependencies in package.json
//xml-fast-parser is local to this package 
var xmlr = require('read-xml');
var fxp = require('fast-xml-parser');

xmlr.readXML('sample.xml',function(err, data){
    if(err) console.log(err);    
    else{
        //readXML function simply reads the xml file and stores in data
        //data is the raw xml file with \t \n 
        //if u display data it will be displayed with \t \n and all 
        console.log("Raw XML file using readXML function variable-(data)");
        console.log(data);
        
        //if u put data.content then it will apply \t \n and give you a presentable form
        var target = data.content;
        
        console.log("XML file with only content and \t \n tags applied variable-(target)");
        console.log(target);
        
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
        //dont know what parse function is doing but u have to give in a presentable form which can be done var target=      data.content
            if(fxp.validate(target)===true){
                //if i use sample.xml instead of target it will work
                //this is json object only if u use parse it converts xml to json  dont need to use getTraversalObj and then use 
                //convertToJson func .... parse func will do the job
                var pobj =fxp.parse(target,options);
                
                console.log("below output is simply by using parse function in fast-xml-parser variable-(pobj)");
                console.log(pobj);
            }
        
        //now xml is parsed and stored in obj but u cannot directly convert into JSON before that
        //u have to use getTraversalObj
        /*
        var try1 = fxp.convertToJson(obj);
        console.log("try1 block executing");
        console.log(try1);
        */
        
        //if u try to execute that block of code without applying getTraversalObj nothing will be printed        
        var tob = fxp.getTraversalObj(target, options);
        //below will display [object Object]
        //console.log(tob);
        var obj = fxp.convertToJson(tob, options);
        
        console.log("below output is due to applying getTraversalObj func with target param not obj param and convertToJson func used variable-(obj)");
        console.log(obj);
        console.log("");
        
        var finobj = JSON.stringify(obj);
        
        console.log("below output is due to conversion of entire json file into string and printing it variable-(finobj)");
        console.log(finobj);
        console.log("");
        //stringify function will convert json into strings so again we are parsing but this since it is already in json we use json.parse instead of convertToJson func used earlier
        
        var finfinobj = JSON.parse(finobj);
        
        console.log("below output is due to PARSING of json file i dont know why they are using it variable-(finfinobj)");
        console.log(finfinobj);
        console.log("");
        
        //task1 is to print one value under D1 section
        //task2 is to use UNIT attribute under D2 section and print a modified VALUE attribute 
        console.log("Task 1 printing printing value of G7");
        console.log(obj.CDF.UTILITYTYPE.D1.G7);
        console.log("If attribute value in UNIT is V then it will return only the whole number part");
        forV();
        console.log("If attribute value in UNIT is A then it will return only the decimal number part");
        forA();
        function forV(){
            for(var i=0; i<obj.CDF.UTILITYTYPE.D2.INSTPARAM.length; i++){
                if(obj.CDF.UTILITYTYPE.D2.INSTPARAM[i]._UNIT=='V'){
                    console.log(Math.trunc(obj.CDF.UTILITYTYPE.D2.INSTPARAM[i]._VALUE));    
                }
            }   
        }
        function forA(){
            for(var i=0; i<obj.CDF.UTILITYTYPE.D2.INSTPARAM.length; i++){
                if(obj.CDF.UTILITYTYPE.D2.INSTPARAM[i]._UNIT=='A'){
                    var n=obj.CDF.UTILITYTYPE.D2.INSTPARAM[i]._VALUE;
                    var dp= (n+"").split(".")[1];
                    console.log(dp);    
                }
            }   
        }
    }//this closing tag is for else block
});
//obj contains JSON file