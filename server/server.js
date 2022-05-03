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


/*
더미 데이터


INSERT INTO complain (line, destination, time, phoneNum, trainNum, temperature, requirement, discomfort) VALUES(1, '소요산행', '2022-04-15 15:35:29', '010-1234-5678', 'S/K200', 20, '바닥에 음료를 쏟았어요', 'trash');

id = 1
line = 1
destination = '소요산행'
time = '2022-04-15 15:35:29'
phoneNum = '010-1234-5678'
trainNum = 'S/K200'
temperature = 20
requirement = '바닥에 음료를 쏟았어요'
discomfort = 'trash'


INSERT INTO complain (line, destination, time, phoneNum, trainNum, temperature, requirement, discomfort) VALUES(1, '의정부행', '2022-04-15 15:36:12', '010-1234-1234', 'S/K150', 19, '', 'null');

id = 2
line = 1
destination = "의정부행"
time = '2022-04-15 15:36:12'
phoneNum = "010-1234-1234"
trainNum = "S/K150"
temperature = 19
requirement = ""
discomfort = "null"


INSERT INTO complain (line, destination, time, phoneNum, trainNum, temperature, requirement, discomfort) VALUES(2, '신도림행', '2022-04-15 15:37:03', '010-3333-3333', 'S6921', 24, '', 'hidden camera');

id = 3
line = 2
destination = '신도림행'
time = '2022-04-15 15:37:03'
phoneNum = '010-3333-3333'
trainNum = 'S6921'
temperature = 24
requirement = ''
discomfort = 'hidden camera'

*/