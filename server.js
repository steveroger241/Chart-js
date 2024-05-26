const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const file = require('./jsondata.json');
app.get('/', (req, res)=>{
    res.send(file);
});

app.listen(8000);