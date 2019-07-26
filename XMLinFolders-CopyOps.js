var fs = require("fs");
var fxp = require('fast-xml-parser');

//const path = require('path');

//below code will just your directory of the file present that is E:/nodekk and u have given samplefolder
// so final result will be E:/nodekk/samplefolder
//const directoryPath = path.join(__dirname, 'samplefolder');
//console.log("the directory path is"+directoryPath);

var xmlfolderlocation = "./xmlfolder";

fs.readdir(xmlfolderlocation, "utf8", function(err, data1){
    console.log("The list of files in xmlfolder folder are: ");
    console.log(data1.toString());
    
    //this vital function forEach traverses through all the files present in that folder it takes in object (data1) and gives out files (file)
    data1.forEach(file =>{    
        
        //file simply adds name of the file 
        file1 = "xmlfolder\\"+ file;
        //file1 tells us how to travel from the current script
        
        fs.readFile(file1, "utf-8", function(err, data){
            if(!err & fxp.validate(data) ){
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
       
                //console.log("the length on instparam in:"+ file); //console.log(jsonfile.CDF.UTILITYTYPE.D2.INSTPARAM.length);
        
                //condition one  if satisfied create 'a' folder and put the file which satisfies the condition         
                if(jsonfile.CDF.UTILITYTYPE.D1.hasOwnProperty('G1') && jsonfile.CDF.UTILITYTYPE.D1.hasOwnProperty('G2') &&jsonfile.CDF.UTILITYTYPE.D1.G15.substring(0, 2)=='HT')
                {
                    console.log("the file has G1 and G2 under D1 and the value of G15 under D1 is 'HT' is found under the file "+ file);
                    //var dest = "./a";
                    //fs.access(dest, (err) => {
                    //if(err)
                    //{
                        fs.mkdir("./a\\",{recursive:true},(err) =>{
                            if(err) 
                            {
                                console.log("error in creating a folder");
                            }
                            
                            
                                console.log("copying "+file+" to 'a' folder due fulfilling condition 1");
                                // file simply contains the name of the xml file 
                                var dest = "./a\\"+file;
                            
                                //havent tried below code          
                                //copyFile(file, path.join(dest, file));
                                fs.writeFileSync(dest, fs.readFileSync(file1));
                        });
                        
                    //}});
                }   
                // console.log(parseInt(jsonfile.CDF.UTILITYTYPE.D3["D3-00"]._DATETIME.substring(0,2)));
        
                //condition two
                if(parseInt(jsonfile.CDF.UTILITYTYPE.D3["D3-00"]._DATETIME.substring(0,2)) >=5 )
                {
                    //when you convert xml file into json the date in that is converted as per iso 8601 format
                    console.log("the file which has D3-00 value greater than 5 under D3 is "+ file);
                    //var dest = "./b";
                    //fs.access(dest, (err) => {
                    //if(err)
                    //{
                        fs.mkdir("./b\\",{recursive:true},(err) =>{
                            if(err) 
                            {
                                console.log("error in creating a folder");
                            }
                            
                            
                                console.log("copying "+file+" to 'b' folder due fulfilling condition 2");
                                // file simply contains the name of the xml file 
                                var dest = "./b\\"+file;
                            
                                //havent tried below code          
                                //copyFile(file, path.join(dest, file));
                                fs.writeFileSync(dest, fs.readFileSync(file1));
                        });
                        
                    //}});                                                                           
                }   
            }
        })
    })
})
//output is wrong it is creating two folders
//inside the folder the name is xml_one.xml but the contents are of xml_two.xml 
