const fs = require('fs');
const members350000 = require('./input/membersListArray(350000).json');
const members360000 = require('./input/membersListArray(360000).json');

const JSONfiles = [
    members350000,
    members360000
]

const iterateFiles = (fileObject) => {
    const loadFileObject = fileObject
    let fileName = 10000;

    for(let i = 0; i < loadFileObject.length; i++){
        scrubJsonUserList(loadFileObject[i], fileName);
        fileName = fileName + 10000;
    }
}

const scrubJsonUserList = (jsonFile, fileName) => {
    const loadJsonFile = jsonFile;

    const dataToKeep = loadJsonFile.filter((item) => {
        return item.unsubscribe_reason === "N/A (Unsubscribed by admin)"
    })
    saveJsonFile(dataToKeep, fileName);
}

const saveJsonFile = (jsonFile, fileName) => {
    const dataJSON = JSON.stringify(jsonFile);
    fs.writeFileSync('./output/json/' + fileName + '.json', dataJSON);
}

iterateFiles(JSONfiles);