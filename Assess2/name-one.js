var fs = require("fs");
var fxp = require('fast-xml-parser');
var datetime = require('moment');

var xmlfolderlocation = "./xml";


fs.readdir(xmlfolderlocation, "utf8", function(err, data1){
    console.log("The list of files in xml folder are: ");
    console.log(data1.toString());
    
    data1.forEach(file =>{    
        
        file1 = "./xml\\"+ file;
        
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
                
                var dateinfile = datetime(jsonfile.UTILITYTYPE.D3["D3-00"]._DATETIME, "DD-MM-YYYY" );
                
                console.log("fffffffffffffff"+dateinfile.format('M'));
                var todaysdate = new Date();
                
                
                var todaysdateformatted = datetime(todaysdate,"DD-MM-YYYY");
                console.log("ttttttttttttttttttt"+todaysdateformatted.format('M'));
                var diff = todaysdateformatted.diff(dateinfile,'months', true)
                console.log("llllllllllllllllllllllllll  " + jsonfile.UTILITYTYPE.D1.G1.toString().length);
                console.log(diff)
                if((jsonfile.UTILITYTYPE.D1.G1.toString().length == 8) && (diff <=2) )
                {
                    console.log("G1 has 8digits and date in D3-00 is within 2months of todays date is in file "+ file);
                        fs.mkdir("./a\\",{recursive:true},(err) =>{
                            if(err) 
                            {
                                console.log("error in creating a folder");
                            }
                                console.log("copying "+file+" to 'a' folder due fulfilling above 2 conditions");
                                 
                                var dest = "./a\\"+file;
                              fs.createReadStream(file1).pipe(fs.createWriteStream(dest)); 
                            /*
                                fs.readFile(file1, "utf-8", (err, data) => {if (err) { console.log(err) }
                                    fs.writeFile(dest, data, (err) => {if (err) console.log(err);
                                        console.log("Successfully Written to File.");
                                    });
                                })
                            */
                                //fs.writeFileSync(dest, fs.readFileSync(file1));
                        });
                }   
                else
                {
                    console.log("The file that did not satisfy above 2 conditions are "+ file);
                    fs.mkdir("./b\\",{recursive:true},(err) =>{
                            if(err) 
                            {
                                console.log("error in creating a folder");
                            }
                                console.log("copying "+file+" to 'b' folder due  not fulfilling above 2 conditions");
                                 
                                var dest = "./b\\"+file;
                            
                                fs.writeFileSync(dest, fs.readFileSync(file1));
                        });   
                }   
            }
        })
    })
})