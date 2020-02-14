const express = require("express");
const actionDatabase = require("../helpers/actionModel");
const projectDatabase = require("../helpers/projectModel");

module.exports = {

    validateProjectID,
    validateActionID
}

function validateProjectID(req, res, next) {

    let id = req.params.id;

    projectDatabase.get(id)
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

function validateActionID(req, res, next) {

    let id = req.params.id;

    actionDatabase.get(id)
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
