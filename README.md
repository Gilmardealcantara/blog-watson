# blog-watson
Blog with node.js, react.js, IBM DB2 and IBM Watson


Access IBM Cloud (DB2 and Natural Language Understanding)  and create the table POST like a sql scrit in ./ and a secretkey to access NLU:

```
$ export DB2_CONNETION='DATABASE=<DB_NAME>;HOSTNAME=<HOST_NAME>;PORT=<PORT>;PROTOCOL=TCPIP;UID=<UUID>;PWD=<PASSWORD>;'
$ export SECRET_NLU='<SECRET_KEY>'
```

### Server
```
$ export PORT="3001"
$ npm install
$ node indexjs # our user nodemon
```
### client
```
$ cd client
$ npm install
$ npm start
```

