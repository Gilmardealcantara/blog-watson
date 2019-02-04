const express = require('express');
const router = express.Router();
const Database = require('../Database');
const dataAnalyze = require('../NLU');


router.get('/posts', (req, res) => {
    let conn = Database.getConn();

    conn.query('select * from SWR78972.POST', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            res.json(data);
        }
        // conn.closeConn();c
    });
});

router.post('/post', (req, res) => {
    dataAnalyze(req.body.content, (error, response) => {
        if (error) {
            console.log(error.error);
            res.send('Post Analize - Fail: ' + error.error);
        } else {
            let conn = Database.getConn();
            console.log(response);
            conn.query(`INSERT INTO SWR78972.POST (TITLE, CONTENT, AUTHOR, NLU) VALUES ('${req.body.title}','${req.body.content}','${req.body.author}', '${JSON.stringify(response)}')`, (err, data) => {
                if (err) {
                    console.log(err);
                    res.send('Post Add - Fail');
                } else {
                    console.log(data);
                    res.send('Post Add - Success');
                }
            });
        }
    });

});

router.delete('/post/:postid', (req, res) => {
    let conn = Database.getConn();
    conn.query(`DELETE FROM SWR78972.POST WHERE ID=${req.params.postid}`, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.json({ msg: 'Post Deleted - Success', post: req.params.postid });
        }
    });
});

module.exports = router;