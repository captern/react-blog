const mongoose = require('mongoose');
// 连接 mongoose 并且使用react这个集合(没有的话，会帮忙新建)
const DB_URL = 'mongodb://127.0.0.1:27017/react';
mongoose.connect(DB_URL);
// 提示连接成功
mongoose.connection.on('connected', function () {
  console.log(' mongoose  mongoose success')
});