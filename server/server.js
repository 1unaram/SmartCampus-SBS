const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const router = express.Router();

// api
app.use(express.json());
app.use(cors());

// mysql
const connection = require('./mysql');
connection.connect();

// Routes
const submitComplain = require('./routes/submitComplain');
app.use('/submitComplain', submitComplain);
const loadComplain = require('./routes/loadComplain');
app.use('/loadComplain', loadComplain);

// Html file
const index = path.resolve(__dirname, '../public/index.html')
router.get('*', (req, res) => {
    res.sendFile(index);
})

// server open
app.listen(8080, function () {
    console.log('listening on 8080...')
})