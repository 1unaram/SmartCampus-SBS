const express = require('express');
const app = express();
const cors = require('cors');

// api
app.use(express.json());
app.use(cors());

// mysql
const connection = require('./mysql');
connection.connect();

const submitComplain = require('./routes/submitComplain');
app.use('/submitComplain', submitComplain);
const loadComplain = require('./routes/loadComplain');
app.use('/loadComplain', loadComplain);

// server open
app.listen(8080, function () {
    console.log('listening on 8080...')
})