const express = require('express');
const bodyParser = require('body-parser');
// 引入 bodyParser 用来接收 post 的参数
const cookieParser = require('cookie-parser');
// 引入 cookieParser 用来解析 cookie
// 引入socket.io
const model = require('./model');
const Chat = model.getModel('chat');

// 将 express 和 io 相关联起来
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('sendmsg', function (data) {
    // 将事件广播至全局，让所有人都知道n
    // io.emit('recvmsg', data)
    const {from, to, msg} = data;
    const chatId = [from, to].sort().join('_');
    Chat.create({chatId, from, to, content: msg}, function (err, doc) {
      io.emit('recvmsg', Object.assign({}, doc._doc))
    })
  })
})

const userRouter = require('./user');

// const app = express();

app.use(cookieParser());            //支持解析传过来的 cookie 数据
app.use(bodyParser.json());         //支持解析传过来的 json 数据
app.use('/user', userRouter);
server.listen(9093, function () {
  console.log('nodenode app start at port 9093')
});