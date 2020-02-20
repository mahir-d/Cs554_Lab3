const axios = require('axios');

const dummyData;
async function getDummyData() {
    const {data} = await axios.get('https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json');
    dummyData = data;
}

async function getById(id) {
    console.log("entered");
    dummyData.forEach(person => {
        if (person.id == id) {
            return person;
         }
    });
 }

module.exports = { getDummyData, getById };