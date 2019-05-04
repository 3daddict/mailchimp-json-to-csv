const testJSON10000 = require('./testJSON1.json');

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
    return loadedFile
}

// push to new json file

//Save to JSON file function
const saveJsonFile = (jsonFile) => {
    const dataJSON = JSON.stringify(jsonFile);
    fs.writeFileSync('./output/json/scrubbedFile.json', dataJSON);
}

//convert json file to csv

//Run script
parseJSONFile(testJSON10000);