"use strict";

const express = require("express");

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to Azure Devops POC!\n");
});

app.get("/html", (req, res) => {
  res.sendFile("sample_page.html", {
    root: __dirname,
  });
});

var port = process.env.PORT || PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
