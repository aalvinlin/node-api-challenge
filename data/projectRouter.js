const express = require("express");
const database = require("./helpers/projectModel");

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
router.get("/:id", validateProjectID, (req, res) => {

    res.status(200).json(req.body.projectData);

});

// DELETE "/:id"
router.delete("/:id", validateProjectID, (req, res) => {

    let id = req.body.projectData.id;

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

function validateProjectID(req, res, next) {

    let id = req.params.id;

    database.get(id)
        .then(response => {
                console.log("GET '/:id':", response);

                if (response === null)
                    { res.status(400).json({error: "No project with ID " + id + " found."}); }
                    else
                    {
                        req.body.projectData = response;
                        next();
                    }
            })
        .catch(error => {
            console.log("GET '/:id' error:", error);
            res.status(500).json({error: "Couldn't retrieve data from projects database."});
        })
}


module.exports = router;