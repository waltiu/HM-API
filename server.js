const express = require('express');
const db = require('./config/user').mongoURI
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.get('/', (req, res) => {
  res.send('hello');
})

const uri = " mongodb://127.0.0.1:27017/HM-SYS?compressors=zlib&gssapiServiceName=HM-SYS";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect((res) => {
  console.log(res, 666)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server runniing ${port}`)
})