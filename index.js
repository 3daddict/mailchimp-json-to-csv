const fs = require('fs');
const members350000 = require('./input/membersListArray(350000).json');

const scrubJsonUserList = (jsonFile) => {
    const loadJsonFile = jsonFile;

    const dataToKeep = loadJsonFile.filter((item) => {
        return item.unsubscribe_reason === "N/A (Unsubscribed by admin)"
    })

    console.log(dataToKeep);
    

}

const saveJsonFile = (jsonFile) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./output/', dataJSON);
}

scrubJsonUserList(members350000);