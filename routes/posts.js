const express = require('express');
const router = express.Router();
const ibmdb = require('ibm_db');

router.get('/posts', (req, res) => {
    ibmdb.open("DATABASE=<dbname>;HOSTNAME=<myhost>;UID=db2user;PWD=password;PORT=<dbport>;PROTOCOL=TCPIP", (err,conn) => {
        if (err) return console.log(err);
        
        conn.query('select * from SWR78972.POST', (err, data) => {
            if (err){
                console.log(err);
            }else{
                console.log(data);
                res.send(data);
            } 
        
            conn.close(() => {
                console.log('done');
            });
        });
    });

});

router.get('/posts/new', (req, res) => {
    ibmdb.open("DATABASE=<dbname>;HOSTNAME=<myhost>;UID=db2user;PWD=password;PORT=<dbport>;PROTOCOL=TCPIP", (err,conn) => {
        if (err) return console.log(err);
        
        conn.query(`INSERT INTO SWR78972.POST (TITLE, CONTENT, AUTHOR) VALUES ('${req.query.title}','${req.query.content}','${req.query.author}')`, (err, data) => {
            if (err){
                console.log(err);
            }else{
                console.log(data);
                res.send('Post Add - Success');
            } 
        
            conn.close(() => {
                console.log('done');
            });
        });
    });

});

module.exports = router;