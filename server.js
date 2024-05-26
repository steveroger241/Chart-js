const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, './client/build')));

const file = require('./jsondata.json');
app.get('/', (req, res) => {
    res.send(file);
});

app.use('*', (req, res) => {
    req.sendFile(path.join(__dirname, './client/build/index.html'));
})

app.listen(8000);