const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = require('./config/url').mongoURI
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const users = require('./routers/api/user.js')

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbase = db.db("HM-SYS");
  module.exports = dbase;

});
app.use('/api/users', users)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server runniing ${port}`)
})

