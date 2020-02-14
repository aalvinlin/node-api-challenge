const express = require("express");
const database = require("../helpers/projectModel");
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
            res.status(500).json({error: "Couldn't retrieve data from projects database."});
        })
})

// GET "/:id"
router.get("/:id", middleware.validateProjectID, (req, res) => {

    res.status(200).json(req.projectData);

});

// DELETE "/:id"
router.delete("/:id", middleware.validateProjectID, (req, res) => {

    let id = req.projectData.id;

    database.remove(id)
        .then(response => {
                console.log("DELETE '/:id':", response);
                res.status(200).json(response);
            })
        .catch(error => {
            console.log("GET '/:id' error:", error);
            res.status(500).json({error: "Couldn't retrieve data from projects database."});
        })
});

// POST "/"
router.post("/", middleware.validateProjectBody, (req, res) => {

    database.insert(req.body)
        .then(response => {
                console.log("POST '/':", response);
                res.status(200).json(response);
            })
        .catch(error => {
            console.log("POST '/' error:", error);
            res.status(500).json({error: "Couldn't add data to projects database."});
        })

});

module.exports = router;