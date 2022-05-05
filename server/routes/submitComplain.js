const express = require("express");
const router = express.Router();
const connection = require('../mysql');

router.post("/", (req, res) => {
    let sql = `INSERT INTO complain (line, destination, time, phoneNum, trainNum, temperature, requirement, discomfort) VALUES(?, ?, NOW(), ?, ?, ?, ?, ?)`;

    const complainData = req.body;

    let discomfort = '';
    complainData.discomfort.map((item) => {
        discomfort += `${item},`;
    })
    discomfort = discomfort.slice(0, -1)
    console.log(discomfort)

    const params = [
        complainData.line,
        complainData.destination,
        complainData.phoneNum,
        complainData.trainNum,
        complainData.temperature,
        complainData.requirement,
        discomfort
    ]

    connection.query(sql, params,
        (err, rows) => {
            if (err) console.log(err);
            res.send(rows);
        }
    );
});

module.exports = router;