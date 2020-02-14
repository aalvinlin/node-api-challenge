const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const projectRouter = require("./data/projectRouter.js");
const actionRouter = require("./data/actionRouter.js");

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

const defaultDisplay = "<h1>Project Server</h1><h2><a href='api/projects'>Projects</a></h2><h2><a href='api/actions'>Actions</a></h2>";

server.get("/", (req, res) => {

    console.log("Project server running.")
    res.send(defaultDisplay);

});

server.get("/api", (req, res) => {

    console.log("Project server running.")
    res.send("<h1>Project Server</h1>");

});

const port = 5000;
server.listen(port, () => "\r\nServer running on port", port);