const express = require("express");
const router = express.Router();
const bluebird = require("bluebird");
const flat = require("flat");
const redis = require("redis");
const client = redis.createClient();
const dummyData = require('../data/dummyData');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


router.get("/people/history", async (req, res) => { 
    let arr = await client.hgetall();
    res.json(arr);
});


router.get("/people/:id", async (req, res) => {
    let id = req.params.id;
    
    
    try {

        if (isNaN(id)) {
            throw 'Id should be a number';
        }

        
        let status = await client.getAsync(id);


        if (status != null) {
            let toRtrn = flat.unflatten(status);
            let lCheck = await client.LPUSHAsync("myList", status);
            res.status(200).send(toRtrn);
        }


        else if (status == null) { 
            let toRtrn = await dummyData.getById(id);
            let setStatus = await client.SETAsync(id, JSON.stringify(toRtrn));
            let lCheck = await client.LPUSHAsync("myList", flat.flatten(toRtrn));
            res.status(200).send(toRtrn);
        }
        





        
    } catch (e) {
        console.log(e);
        res.status(404).json({ Error: e });
    }
})

module.exports = router;