const express = require('express');
const bodyParser = require('body-parser');



if (!process.env.PORT || !process.env.DB2_CONNETION || !process.env.SECRET_NLU ) {
    console.log('exec: source .enviroment.sh');
    return;
}


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Working...");
});

const routes = require('./routes');
app.use('/api', routes);

app.use(express.static(__dirname + '/client'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Server running on localhost:' + port);
    console.log("CONNETION_STRING_DB2: " + process.env.DB2_CONNETION);
    console.log("Wait open Database connection ...");
})
