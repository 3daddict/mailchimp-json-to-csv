const fs = require('fs');
const { Parser } = require('json2csv');
const testJSON10000 = require('./testJSON1.json');
const scrubbedFile = require('./output/scrubbedFile.json');

// find all users with unscubscribed by admin
const parseJSONFile = (jsonFile) => {
    const loadedFile = jsonFile;

    const dataToKeep = loadedFile.filter((item) => {
        return item.unsubscribe_reason === "N/A (Unsubscribed by admin)"
    })
    restructureData(dataToKeep);
}

// move the activity up to main level with id
const restructureData = (dataToKeep) => {
    const loadedFile = dataToKeep
    //Iterate through the objects to move and delete unwated data
    for (let i = 0; i < loadedFile.length; i++) {
        loadedFile[i]["action"] = loadedFile[i].activity.action
        loadedFile[i]["timestamp"] = loadedFile[i].activity.timestamp
        loadedFile[i]["title"] = loadedFile[i].activity.title
        delete loadedFile[i].uniqueEmail
        delete loadedFile[i].emailType
        delete loadedFile[i].activity
    }
    saveJsonFile(loadedFile)
}

//Save to JSON file function
const saveJsonFile = (jsonFile) => {
    const dataJSON = JSON.stringify(jsonFile);
    fs.writeFileSync('./output/scrubbedFile.json', dataJSON);
}

//convert json file to csv
const convertToCSV = (jsonFile) => {
    const fields = ['id', 'email', 'status', 'unsubscribe_reason', 'action', 'timestamp', 'title'];
    const json2csvParser = new Parser({ fields });
    saveCSVFile(json2csvParser.parse(jsonFile));
}

const saveCSVFile = (csvFile) => {
    const dataCSV = csvFile;
    fs.writeFileSync('./output/jsonExport.csv', dataCSV);
}

//Run scripts
parseJSONFile(testJSON10000);
convertToCSV(scrubbedFile);