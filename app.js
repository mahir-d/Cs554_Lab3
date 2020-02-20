const express = require('express');
const app = express();
const configRoutes = require("./routes");
const bodyParser = require("body-parser");
const dummyData = require('./data/dummyData');

app.use(bodyParser.json());
configRoutes(app);

app.get("/", async (req, res) => { 
    const dum = await dummyData.getDummyData();
    console.log(dum);
})


app.listen(3000, () => {
    console.log('server started');
    console.log("Routes will be running on http://localhost:3000");

});