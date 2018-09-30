const express = require('express');
const bodyParser = require('body-parser');
// 引入 bodyParser 用来接收 post 的参数
const cookieParser = require('cookie-parser');
// 引入 cookieParser 用来解析 cookie
const userRouter = require('./user');

const app = express();

app.use(cookieParser());            //支持解析传过来的 cookie 数据
app.use(bodyParser.json());         //支持解析传过来的 json 数据
app.use('/user', userRouter);
app.listen(9093, function () {
  console.log('nodenode app start at port 9093')
});