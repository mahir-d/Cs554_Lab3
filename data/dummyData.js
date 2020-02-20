const axios = require('axios');

let dummyData = {};
async function getDummyData() {
    const { data } = await axios.get('https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json');
    dummyData = await data;
}

async function getById(id) {
    console.log("entered");
    for (let i = 0; i < dummyData.length; i++) {
        if (dummyData[i].id == id) {
            
            setTimeout(function () { console.log(dummyData[i]); },5000);
            return dummyData[i]; 
            
            
        }
    };

    setTimeout(function () { throw 'No person found with this object!' }, 5000);

}

module.exports = { getDummyData, getById };