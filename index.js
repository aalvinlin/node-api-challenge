const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {

    console.log("Project server running.")

    res.send("<h1>Project Server</h1>");

});

const port = 5000;
server.listen(port, () => "\r\nServer running on port", port);