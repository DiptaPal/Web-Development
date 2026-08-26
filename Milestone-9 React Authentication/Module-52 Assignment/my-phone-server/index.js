const express = require("express");
const cors = require("cors");
const phones = require('./phones.json');

const app = express();
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello From my server.");
});

app.get("/data", (req, res) => {
    res.send("More data is coming.");
})

app.get("/phones", (req, res) => {
    res.send(phones);
});

app.get("/phones/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || { };
    res.send(phone)
})

app.listen(port, () => {
    console.log(`My server is running on port: ${port}`);
});