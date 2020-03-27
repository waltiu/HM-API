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
const house = require('./routers/api/house')
const school = require('./routers/api/school')

const hospital = require('./routers/api/hospital')

const Intermediary = require('./routers/api/Intermediary')
const comment = require('./routers/api/comment')

app.use('/api/users', users)
app.use('/api/source', village)
app.use('/api/source', house)
app.use('/api/source', school)

app.use('/api/source', hospital)

app.use('/api/source', Intermediary)
app.use('/api/comment', comment)




//端口
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server runniing ${port}`)
})


