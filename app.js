const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors())
app.use(bodyParser.json());

const routeMaps = require('./routes/Temples');
const routerUser = require('./routes/Users')

app.use('/map', routeMaps);
app.use('/user', routerUser);

app.get('/',( req, res ) => {
    res.send('hello home');
});


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true  }, () => {
	console.log("Connected to DB")
});

app.listen(4000);