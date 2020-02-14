const express = require("express");
const actionDatabase = require("../helpers/actionModel");
const projectDatabase = require("../helpers/projectModel");

module.exports = {

    validateProjectID,
    validateProjectBody,

    validateActionID,
    validateActionBody
}

function validateProjectID(req, res, next) {

    // if called after validateActionBody, get ID from req.body["project_id"].
    // otherwise, get ID from the URL.
    let id = req.body["project_id"] || req.params.id;

    projectDatabase.get(id)
        .then(response => {
                console.log("GET '/:id':", response);

                if (response === null)
                    { res.status(400).json({error: "No project with ID " + id + " found."}); }
                    else
                    {
                        req.projectData = response;
                        next();
                    }
            })
        .catch(error => {
            console.log("GET '/:id' error:", error);
            res.status(500).json({error: "Couldn't retrieve data from projects database."});
        })
}

function validateProjectBody(req, res, next) {
    if (!req.body)
        { res.status(400).json({error: "Missing post data."}) }

    else if (!req.body.name || !req.body.description)
        { res.status(400).json({error: "Project name and description are both required."}) }
    
    next();
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
                        req.actionData = response;
                        next();
                    }
            })
        .catch(error => {
            console.log("GET '/:id' error:", error);
            res.status(500).json({error: "Couldn't retrieve data from actions database."});
        })
}

function validateActionBody(req, res, next) {
    if (!req.body)
        { res.status(400).json({error: "Missing post data."}) }

    else if (!req.body["project_id"] || !req.body.description || !req.body.notes)
        { res.status(400).json({error: "Project id, name, and description are all required."}) }
    
    else if (req.body.description.length > 128)
        { res.status(400).json({error: "Project description length cannot exceed 128 characters."}) }
    
    next();
}
