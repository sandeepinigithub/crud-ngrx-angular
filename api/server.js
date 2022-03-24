const express = require('express');
const path = require('path');
const app = express();
const randomId = require('random-id');
const bodyParser = require("body-parser");
const port = 3000;

const idlen = 10;
// place holder for the data
let usersDetails = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/crud-ngrx-angular/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
});