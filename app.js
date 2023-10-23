const fs = require("fs");
const xml2js = require("xml2js");


var parseString = require("xml2js").parseString;
const xml = "./xml/D01.xml";

let xmlData = fs.readFileSync(xml,"utf-8");
console.log(xmlData);
let jsonData;

parseString(xmlData, function(err,result){
    jsonData = JSON.stringify(result,null,2);
});


fs.writeFile("output.json",jsonData,(err) => {
    if(err){
        console.error(err);
    }else{
        console.log("saved");
    }
});