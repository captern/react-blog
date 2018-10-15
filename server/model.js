const mongoose = require('mongoose');
// 连接 mongoose 并且使用react这个集合(没有的话，会帮忙新建)
const DB_URL = 'mongodb://127.0.0.1:27017/chart';
mongoose.connect(DB_URL);
// 提示连接成功
mongoose.connection.on('connected', function () {
  console.log(' mongoose  mongoose success')
});

const models = {
  user: {
    'user': {type: String, require: true},
    'pwd': {type: String, require: true},
    'type': {type: String, require: true},
    'avatar': {type: String},     // 头像
    'desc': {type: String},       //个人简介
    'title': {type: String},      //职位名
    // 如果是boss，还有两个字段
    'company': {type: String},
    'money': {type: String},
  },
  chat: {
    'chatId': {type: String, require: true},
    'from': {type: String, require: true},
    'to': {type: String, require: true},
    'read': {type: Boolean, default: false},      // 只是对 to 的对象有效，因为是我发的，我肯定读过
    'content': {type: String, require: true, default: ''},
    'create_time': {'type': Number, 'default': new Date().getTime()},
  }
};
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}
