const express = require("express");         //import express
const app = express();                      //initialise express

const cors = require("cors");               //get the cors files into the mian program too

const port = process.env.PORT || 3000;      //use the port provided by server or use local host 3000 for ourself
const data = require("./data.json");        //get data from jsno file

app.use(cors());

app.get("/", (request, response) => {       //get a request to send a response
    response.send("Hello I am Live.");
});

app.get("/service", (request, response) => {
    response.send(data);
});

app.listen(port, () => {
    console.log("I am live again!");
});