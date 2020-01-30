const express = require('express');
const app = express();
const mongoose = require('mongoose')
const url = require('./config/url').mongoURI
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//数据库连接
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.once('open', function () {
  console.log('数据库已连接');
});


//路由
const users = require('./routers/api/user.js')
const village = require('./routers/api/village')
app.use('/api/users', users)
app.use('/api/source', village)



//端口
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server runniing ${port}`)
})


