const express = require('express');
const utils = require('utility');        // utility 为了实现md5加密
const Router = express.Router();
const model = require('./model');

const User = model.getModel('user');
// 作为调试列表
Router.get('/list', function (req, res) {
  // 清空所有数据
  // User.remove({}, function (err, doc) {
  // })
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})
// 登录
Router.post('/login', function (req, res) {
  const {user, pwd} = req.body;         //获取用户名和密码
  // findOne 的第一个条件是查询条件，第二个是显示条件  即 {'pwd': 0} 表示 pwd不显示
  User.findOne({user, pwd: md5Pwd(pwd)}, {'pwd': 0,'__v':0}, function (err, doc) {
    if (!doc) {
      return res.json({code: 1, msg: '用户名或者密码错误'})
    }
    return res.json({code: 0, data: doc})
  })
});
// 注册
Router.post('/register', function (req, res) {
  const {user, pwd, type} = req.body;
  // 判断用户名重复
  User.findOne({user: user}, function (err, doc) {
    if (doc) {
      return res.json({code: 1, msg: '用户名重复'})
    }
    User.create({user, type, pwd: md5Pwd(pwd)}, function (e, d) {
      if (e) {
        return res.json({code: 1, msg: '后端出错了'})
      }
      // 注册成功
      return res.json({code: 0})
    })
  })
})
Router.get('/info', function (req, res) {
  // 用户有没有cookie
  return res.json({code: 1})
});

// 密码手动加密
function md5Pwd(pwd) {
  const salt = 'captern930211';
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router;