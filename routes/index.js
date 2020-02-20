const peopleRoutes = require("./people");


const constructorMethod = app => {
    app.use("/api", peopleRoutes);
    

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Page not found at this route" });
    });
};

module.exports = constructorMethod;