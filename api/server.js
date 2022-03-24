const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const randomId = require('random-id');
const bodyParser = require("body-parser");
const { METHODS } = require('http');

const port = 3000;
const idlen = 10;
// place holder for the data
let users = [{ name: "Pradeep", mobile: 7524945757 }];


var corsOptions = {
    origin: 'http://localhost:4200', //Angular default port
    optionsSuccessStatus: 200,// For legacy browser support
    methods: "GET, PUT,POST,DELETE"
}
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/crud-ngrx-angular/build/index.html'));
});
app.get('/api/getUsers', (req, res) => {
    res.json(users)
});

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
});