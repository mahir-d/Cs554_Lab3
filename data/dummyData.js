const axios = require('axios');

let dummyData = {};
async function getDummyData() {
    const { data } = await axios.get('https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json');
    dummyData = await data;
}


getById = ((id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // find project
            let objToRtrn;
            for (let i = 0; i < dummyData.length; i++) {
                if (dummyData[i].id == id) {

                    objToRtrn = dummyData[i];




                }
            };
            if (objToRtrn != undefined) {
                resolve(objToRtrn);
            } else {
                reject("Person not found with this id");
            }
        }, 5000);
    });
})
module.exports = { getDummyData, getById };