const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const students = ["Blake"]

//__dirname is a default keyword in JS that returns back the filepath up to where were running 
app.get("/", (req,res)=> {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get('/api/students', (req,res)=> {
    res.status(200).send(students);
});

const port = process.env.PORT || 4545;

app.listen(port, ()=> {
    console.log(`Running on ${port}`)
});