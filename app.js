const fs = require("fs");
const xml2js = require("xml2js");

var parseString = require("xml2js").parseString;

for (let i = 1; i <= 8; i++) {
    let fileName = `アセット ${i}`;
    const xml = fileName + ".svg";
    let xmlData = fs.readFileSync(xml, "utf-8");

    let jsonData;
    parseString(xmlData, function (err, result) {
        jsonData = JSON.stringify(result, null, 2);
    });

    fs.writeFile("output/" + fileName + ".json", jsonData, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("saved");
        }
    });
}
