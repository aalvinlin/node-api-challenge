const express = require("express");
const database = require("./helpers/actionModel");

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
router.get("/:id", validateActionID, (req, res) => {

    res.status(200).json(req.body.actionData);
});

// DELETE "/:id"
router.delete("/:id", validateActionID, (req, res) => {

    let id = req.body.actionData.id;

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

function validateActionID(req, res, next) {

    let id = req.params.id;

    database.get(id)
        .then(response => {
                console.log("GET '/:id':", response);

                if (response === null)
                    { res.status(400).json({error: "No action with ID " + id + " found."}); }
                else
                    {
                        req.body.actionData = response;
                        next();
                    }
            })
        .catch(error => {
            console.log("GET '/:id' error:", error);
            res.status(500).json({error: "Couldn't retrieve data from actions database."});
        })
}

module.exports = router;