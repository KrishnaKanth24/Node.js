//you cannot read excel file directly by simply using fs.creatReadStream
//you have to install seperate module 
//i have installed exceljs module

var excelfile = require('exceljs');
var file = new excelfile.Workbook();
//console.log(file);
file.xlsx.readFile('filestreamexcel.xlsx')
    .then(function(){
        
        console.log("The excel file when converted to tostring()")
        console.log(file.toString());
        
        //why below code is not expanding all object and just putting it under double quotes
        //console.log(JSON.stringify(file.toString()));
        console.log("");
    
        var sheet = file.getWorksheet("Sheet1");
        
        console.log("Number of rows in the excel sheet is "+sheet.rowCount);
        console.log("number of columns in the excel sheet is "+sheet.columnCount);
        //since excel rows and cols start from 1 for loop also starts from 1    
        /*    
            for(var i=1;i<=sheet.rowCount;i++){
                console.log(sheet.getRow(i).values);
                console.log("");        
        }
        */
        //displays eronomous information
        //console.log(sheet);
        
        console.log("the contents in sheet are:")
        sheet.eachRow(function(row, rowNum){
            console.log("Row "+rowNum + "= " + JSON.stringify(row.values));
        });
        
    //JSON.parse() func converts JSON string into javascript objects
    //JSON.stringify() will convert javascript objects into JSON strings
        function modifyExceltoJSON(){
            var storage1 = [];
            var storage2 = [];
            for(var x=2; x<=sheet.rowCount; x++){
                if(sheet.getRow(x).getCell(5).value == sheet.getRow(x).getCell(6).value){
                    
                    //below code will print 
                    //console.log(sheet.getRow(x).getCell(5).value); 
                    
                    var temp = sheet.getRow(x).getCell(2).value + sheet.getRow(x).getCell(3).value;
                    storage1.push({"P1":sheet.getRow(x).getCell(1).value, "P2":temp,"P3":sheet.getRow(x).getCell(4).value,"P4":sheet.getRow(x).getCell(5).value,"P5":sheet.getRow(x).getCell(6).value});                
                }
                else{
                    var temp = sheet.getRow(x).getCell(2).value - sheet.getRow(x).getCell(3).value;
                    storage2.push({"P1":sheet.getRow(x).getCell(1).value, "P2":temp,"P3":sheet.getRow(x).getCell(4).value,"P4":sheet.getRow(x).getCell(5).value,"P5":sheet.getRow(x).getCell(6).value});
                }
            } 
            console.log("");
            console.log("JSON strings if wiring and event is same"+JSON.stringify(storage1));
            console.log("");
            console.log("JSON strings if wiring and event arent same"+JSON.stringify(storage2));
            console.log("");
            console.log("");
            var storage3 = storage1.concat(storage2);
            
            //simply storage 3 is javascript objects
            console.log("The javascript object which is array of objects are:")
            console.log(storage3);
            console.log("");
            //java.stringify will convert javascript objects into json
            console.log("Total JSON strings first bunch is if wiring and event is same"+JSON.stringify(storage3));
            
            //lets try to convert JSON strings into javascript objects
            //console.log(JSON.parse(JSON.stringify(storage3)))
        }
    modifyExceltoJSON();
})
// 9600623302 sathish sands