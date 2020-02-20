const express = require("express");
const router = express.Router();

const dummyData = require('../data/dummyData');



router.get("/people/:id", async (req, res) => {
    let id = req.params.id;
    console.log(id);
    try {
        let person = await dummyData.getById(id);
        res.status(200).send(person);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;