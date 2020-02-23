const express = require('express');
const app = express();
const configRoutes = require("./routes");
const bodyParser = require("body-parser");
const dummyData = require('./data/dummyData');
const redis = require("redis");
const bluebird = require('bluebird');
const client = redis.createClient();

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

app.use(bodyParser.json());
app.use("/", async (req, res, next) => {
    await dummyData.getDummyData();
    next();
})

configRoutes(app);




app.listen(4000, async () => {
    console.log('server started');
    console.log("Routes will be running on http://localhost:3000");
    await client.FLUSHALLAsync();

});