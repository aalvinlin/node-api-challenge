const express = require("express");
const database = require("../helpers/actionModel");
const middleware = require("./middleware");

const router = express.Router();

// GET "/"
router.get("/", (req, res) => {

    database.get()
        .then(response => {
                console.log("GET '/':", response);
                res.status(200).json(response);
            })
        .catch(error => {
            console.log("GET '/' error:", error);
            res.status(500).json({error: "Couldn't retrieve data from actions database."});
        })
})

// GET "/:id"
router.get("/:id", middleware.validateActionID, (req, res) => {

    res.status(200).json(req.actionData);
});

// DELETE "/:id"
router.delete("/:id", middleware.validateActionID, (req, res) => {

    let id = req.actionData.id;

    database.remove(id)
        .then(response => {
                console.log("DELETE '/:id':", response);
                res.status(200).json(response);
            })
        .catch(error => {
            console.log("GET '/:id' error:", error);
            res.status(500).json({error: "Couldn't retrieve data from actions database."});
        })
});

// POST "/"

router.post("/", middleware.validateActionBody, middleware.validateProjectID, (req, res) => {

    console.log("req.body contains...", req.body);

    database.insert(req.body)
        .then(response => {
                console.log("POST '/':", response);
                res.status(200).json(response);
            })
        .catch(error => {
            console.log("POST '/' error:", error);
            res.status(500).json({error: "Couldn't add data to actions database."});
        })

});



module.exports = router;