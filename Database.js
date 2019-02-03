const ibmdb = require('ibm_db');

const Database  = {

    openConn() {
        ibmdb.open(process.env.DB2_CONNETION, (err, conn) => {
            if (err) return console.log(err);
            console.log("Open DB Success!!!");
            this.conn = conn
        });
    },
    getConn() {
        return this.conn;
    },
    close() {
        this.conn.close(() => {
            console.log('done');
        });
    }
}

Database.openConn();
module.exports =  Database;