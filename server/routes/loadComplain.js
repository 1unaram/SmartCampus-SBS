const express = require("express");
const router = express.Router();
const connection = require('../mysql');

router.get("/", (req, res) => {
    connection.query(`SELECT * FROM complain`, (err, rows) => {
        if (err) console.log(err);
        res.send(rows);
    })
});

module.exports = router;