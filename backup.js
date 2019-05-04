const fs = require('fs');
const { Parser } = require('json2csv');

//INPUT FILES
// const members10000 = require('./input/membersListArray(10000).json');
// const members20000 = require('./input/membersListArray(20000).json');
// const members30000 = require('./input/membersListArray(30000).json');
// const members40000 = require('./input/membersListArray(40000).json');
// const members50000 = require('./input/membersListArray(50000).json');
// const members60000 = require('./input/membersListArray(60000).json');
// const members70000 = require('./input/membersListArray(70000).json');
// const members80000 = require('./input/membersListArray(80000).json');
// const members90000 = require('./input/membersListArray(90000).json');
// const members100000 = require('./input/membersListArray(100000).json');
// const members110000 = require('./input/membersListArray(110000).json');
// const members120000 = require('./input/membersListArray(120000).json');
// const members130000 = require('./input/membersListArray(130000).json');
// const members140000 = require('./input/membersListArray(140000).json');
// const members150000 = require('./input/membersListArray(150000).json');
// const members160000 = require('./input/membersListArray(160000).json');
// const members170000 = require('./input/membersListArray(170000).json');
// const members180000 = require('./input/membersListArray(180000).json');
// const members190000 = require('./input/membersListArray(190000).json');
// const members200000 = require('./input/membersListArray(200000).json');
// const members210000 = require('./input/membersListArray(210000).json');
// const members220000 = require('./input/membersListArray(220000).json');
// const members230000 = require('./input/membersListArray(230000).json');
// const members240000 = require('./input/membersListArray(240000).json');
// const members250000 = require('./input/membersListArray(250000).json');
// const members260000 = require('./input/membersListArray(260000).json');
// const members270000 = require('./input/membersListArray(270000).json');
// const members280000 = require('./input/membersListArray(280000).json');
// const members290000 = require('./input/membersListArray(290000).json');
// const members300000 = require('./input/membersListArray(300000).json');
// const members310000 = require('./input/membersListArray(310000).json');
// const members320000 = require('./input/membersListArray(320000).json');
// const members330000 = require('./input/membersListArray(330000).json');
// const members340000 = require('./input/membersListArray(340000).json');
const members350000 = require('./input/membersListArray(350000).json');
const members360000 = require('./input/membersListArray(360000).json');
// const members370000 = require('./input/membersListArray(370000).json');
// const members380000 = require('./input/membersListArray(380000).json');
// const members390000 = require('./input/membersListArray(390000).json');
// const members400000 = require('./input/membersListArray(400000).json');
// const members410000 = require('./input/membersListArray(410000).json');
// const members420000 = require('./input/membersListArray(420000).json');
// const members430000 = require('./input/membersListArray(430000).json');
// const members440000 = require('./input/membersListArray(440000).json');
// const members450000 = require('./input/membersListArray(450000).json');
// const members460000 = require('./input/membersListArray(460000).json');
// const members470000 = require('./input/membersListArray(470000).json');
// const members480000 = require('./input/membersListArray(480000).json');
// const members490000 = require('./input/membersListArray(490000).json');

//input JSON file load array
const JSONfiles = [
    members350000, members360000
    // members10000,
// members20000,
// members30000,
// members40000,
// members50000,
// members60000,
// members70000,
// members80000,
// members90000,
// members100000,
// members110000,
// members120000,
// members130000,
// members140000,
// members150000,
// members160000,
// members170000,
// members180000,
// members190000,
// members200000,
// members210000,
// members220000,
// members230000,
// members240000,
// members250000,
// members260000,
// members270000,
// members280000,
// members290000,
// members300000,
// members310000,
// members320000,
// members330000,
// members340000,
// members350000,
// members360000,
// members370000,
// members380000,
// members390000,
// members400000,
// members410000,
// members420000,
// members430000,
// members440000,
// members450000,
// members460000,
// members470000,
// members480000,
// members490000
]

const JsonToCSVfiles = [
    // new10000,
    // new20000,
    // new30000,
    // new40000,
    // new50000,
    // new60000,
    // new70000,
    // new80000,
    // new90000,
    // new100000,
    // new110000,
    // new120000,
    // new130000,
    // new140000,
    // new150000,
    // new160000,
    // new170000,
    // new180000,
    // new190000,
    // new200000,
    // new210000,
    // new220000,
    // new230000,
    // new240000,
    // new250000,
    // new260000,
    // new270000,
    // new280000,
    // new290000,
    // new300000,
    // new310000,
    // new320000,
    // new330000,
    // new340000,
    // new350000,
    // new360000,
    // new370000,
    // new380000,
    // new390000,
    // new400000,
    // new410000,
    // new420000,
    // new430000,
    // new440000,
    // new450000,
    // new460000,
    // new470000,
    // new480000,
    // new490000,
]

//Load JSONfiles and iterate through array to run Scrub function
const iterateFiles = (fileObject) => {
    const loadFileObject = fileObject
    let fileName = 10000;

    for (let i = 0; i < loadFileObject.length; i++) {
        scrubJsonUserList(loadFileObject[i], fileName);
        buildFileNames(fileName);
        fileName = fileName + 10000;
    }
}
//Scrub function to only output N/A (Unsubscribed by admin)
const scrubJsonUserList = (jsonFile, fileName) => {
    const loadJsonFile = jsonFile;

    const dataToKeep = loadJsonFile.filter((item) => {
        return item.unsubscribe_reason === "N/A (Unsubscribed by admin)"
    })
    saveJsonFile(dataToKeep, fileName);
}
//Save to JSON file function
const saveJsonFile = (jsonFile, fileName) => {
    const dataJSON = JSON.stringify(jsonFile);
    fs.writeFileSync('./output/json/' + fileName + '.json', dataJSON);
}

const buildFileNames = (fileName) => {
    JsonToCSVfiles.push(fileName);
    console.log(JsonToCSVfiles);
}

// //CSV Conversion
// const convertToCSV = (jsonFile) => {
//     const fields = ['id', 'email', 'uniqueEmail', 'emailType', 'status', 'activity/action', 'activity/timestamp', 'activity/campaign_id', 'activity/title', 'unsubscribe_reason', 'activity/url'];
//     let fileName = 10000;
//     const json2csvParser = new Parser({ fields });

//     for (let i = 0; i < jsonFile.length; i++) {
//         saveCSVFile(json2csvParser.parse(jsonFile[i]), fileName);
//         fileName = fileName + 10000;
//     }
// }

// //Save to JSON file function
// const saveCSVFile = (csvFile, fileName) => {
//     const dataCSV = csvFile;
//     fs.writeFileSync('./output/csv/' + fileName + '.csv', dataCSV);
// }

// //Script Init Commands;
// //Scrub JSON files
iterateFiles(JSONfiles);
// //Convert to CSV
// convertToCSV(JsonToCSVfiles);