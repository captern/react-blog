const express = require('express');
const utils = require('utility');        // utility 为了实现md5加密
const Router = express.Router();
const model = require('./model');

const User = model.getModel('user');
// 作为调试列表
Router.get('/list', function (req, res) {
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})
// 注册
Router.post('/register', function (req, res) {
  console.log(req.body);
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