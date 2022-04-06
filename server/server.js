const express = require('express');
const app = express();
const cors = require('cors');

// api
app.use(express.json());
app.use(cors());
const submitComplain = require('./routes/submitComplain');
app.use('/submitComplain', submitComplain);

// server open
app.listen(8080, function () {
    console.log('listening on 8080...')
})