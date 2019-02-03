const express = require('express');
const router = express.Router();
const Database = require('../Database');

router.get('/posts', (req, res) => {
    let conn = Database.getConn();

    conn.query('select * from SWR78972.POST', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.json(data);
        }
        // conn.closeConn();c
    });
});

router.post('/post', (req, res) => {
    let conn = Database.getConn();

    conn.query(`INSERT INTO SWR78972.POST (TITLE, CONTENT, AUTHOR) VALUES ('${req.body.title}','${req.body.content}','${req.body.author}')`, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.send('Post Add - Success');
        }
        // conn.closeConn();
    });
});

module.exports = router;