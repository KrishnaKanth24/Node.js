var fs = require("fs");
var fxp = require('fast-xml-parser');
var path = require('path');

var xmlfolderlocation = path.resolve( __dirname, "xmlfolder");

fs.readdir(xmlfolderlocation, "utf8",async function(err, data1){
    
    console.log("The list of files in xmlfolder folder are:(inside readdir) ");
    console.log(data1.toString());
    
    //data1.forEach(file =>{    
    for await (const file of data1 ){    
        
        //the mistake i did is this for loop section is asynchronous i mean two threads are executed but the last thread is 
        //xml_two.xml which gets stored in var file1 and that is dealt all over the code spoiling the entire output
        var file1 = path.resolve(xmlfolderlocation , file);
        console.log("the total path of the source files are(inside for loop) "+file1);
        
        //file1 = "xmlfolder\\"+ file;
         fs.readFile(file1, "utf-8", async function(err, data){
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
                var jsonfile =  fxp.parse(data, options);
              
                //console.log(file+"  "+file1);
                await conditionone(jsonfile, file);
                
                console.log(file+"  "+file1);
                await  conditiontwo(jsonfile,file);
                
            }
        })
    }
})

function conditionone(jsonfile, file){
    
    //condition one  if satisfied create 'a' folder and put the file which satisfies the condition         
                if(jsonfile.CDF.UTILITYTYPE.D1.hasOwnProperty('G1') && jsonfile.CDF.UTILITYTYPE.D1.hasOwnProperty('G2') &&jsonfile.CDF.UTILITYTYPE.D1.G15.substring(0, 2)=='HT')
                {
                   console.log("the file has G1 and G2 under D1 and the value of G15 under D1 is 'HT' is found under the file "+ file);
                   
                        fs.mkdir("./a\\",{recursive:true}, function(err) {
                            if(err) 
                            {
                                console.log("error in creating a folder");
                            }
                                                       
                                console.log("copying "+file+" to 'a' folder due fulfilling condition 1");
                                var dest = "./a\\"+file;
                                var src = path.resolve(path.join(__dirname,"\\xmlfolder"),file).toString();
                                console.log(src);
                              
                                fs.writeFileSync(dest, fs.readFileSync(src));
                        });
                }   
}
function conditiontwo(jsonfile, file){
    
    //condition two
                if(parseInt(jsonfile.CDF.UTILITYTYPE.D3["D3-00"]._DATETIME.substring(0,2)) >=5 )
                {
                   console.log("the file which has D3-00 value greater than 5 under D3 is "+ file);
                    
                        fs.mkdir("./b\\",{recursive:true}, function(err){
                            if(err) 
                            {
                                console.log("error in creating a folder");
                            }
                                      
                                console.log("copying "+file+" to 'b' folder due fulfilling condition 2");
                                var dest = "./b\\"+file;
                                var src = path.resolve(path.join(__dirname,"\\xmlfolder"),file).toString();
                                console.log(src);
                              
                                fs.writeFileSync(dest, fs.readFileSync(src));
                        });                                                                           
                } 
}