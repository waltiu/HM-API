const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const users = require('./routers/api/user.js')
app.get('/', (req, res) => {
  res.send('hello');
})

const url = " mongodb://127.0.0.1:27017/HM-SYS?compressors=zlib&gssapiServiceName=HM-SYS";
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbase = db.db("HM-SYS");
  dbase.collection('login').insertOne({ name: "菜鸟教程", url: "www.runoob" }).then(res => {
  })
});
app.get('/w', function (req, res) {
  res.json('hello world');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server runniing ${port}`)
})