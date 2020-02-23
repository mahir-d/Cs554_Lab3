const axios = require('axios');

let dummyData = {};
async function getDummyData() {
    const { data } = await axios.get('https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json');
    dummyData = await data;
}

async function getById(id) {

    


    for (let i = 0; i < dummyData.length; i++) {
        if (dummyData[i].id == id) {


            return dummyData[i];



        }
    };

    throw 'Person not found with the given id';

}

module.exports = { getDummyData, getById };