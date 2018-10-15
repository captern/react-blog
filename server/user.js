const express = require('express');
const utils = require('utility');        // utility 为了实现md5加密
const Router = express.Router();
const model = require('./model');

const Chat = model.getModel('chat');
const User = model.getModel('user');
const _filter = {'pwd': 0, '__v': 0};     //统一控制后台返回数据，不显示 pwd 和 __v 版本号

// 清空所有数据
// Chat.remove({}, function (req, res) {
//
// })
// 作为调试列表
Router.get('/list', function (req, res) {
  const {type} = req.query
  // 清空所有数据
  // User.remove({}, function (err, doc) {
  // })
  User.find({type}, function (err, doc) {
    return res.json({code: 0, data: doc})
  })
});
// 获取聊天信息
Router.get('/getmsglist', function (req, res) {
  const user = req.cookies.userId;
  User.find({}, function (e, userdoc) {
    let users = {}
    userdoc.forEach(v => {
      users[v._id] = {name: v.user, avatar: v.avatar}
    })
    // 查询信息...表述查询发给我的和发自我的信息
    Chat.find({'$or': [{from: user}, {to: user}]}, function (err, doc) {
      if (!err) {
        return res.json({code: 0, msgs: doc, users: users})
      }
    })
  });
  // Chat.find({'$or': [{from: user, to: user}]}, function (err, doc) {
  // Chat.find({}, function (err, doc) {
  //   if (!err) {
  //     return res.json({code: 0, msgs: doc})
  //   }
  // })
});
// 修改未读信息数量
Router.post('/readmsg', function (req, res) {
  const userId = req.cookies.userId;
  const {from} = req.body;
  Chat.update({from, to: userId}, {'$set': {read: true}}, {'multi': true}, function (err, doc) {
    if (!err) {
      return res.json({code: 0, num: doc.nModified})
    }
    return res.json({code: 1, msg: '修改失败'})
  })
});
// 完善信息
Router.post('/update', function (req, res) {
  const userId = req.cookies.userId;
  if (!userId) {
    return json.dumps({code: 1})
  }
  const body = req.body
  User.findByIdAndUpdate(userId, body, function (err, doc) {
    // Object.assign 数据合并
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body)
    return res.json({code: 0, data})
  })
});
// 登录
Router.post('/login', function (req, res) {
  const {user, pwd} = req.body;         //获取用户名和密码
  // findOne 的第一个条件是查询条件，第二个是显示条件  即 {'pwd': 0} 表示 pwd不显示
  User.findOne({user, pwd: md5Pwd(pwd)}, _filter, function (err, doc) {
    if (!doc) {
      return res.json({code: 1, msg: '用户名或者密码错误'})
    }
    // 设置本地cookie，来存储我的登录信息
    res.cookie('userId', doc._id)
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
    // 使用 creat 无法拿到用户的id 所以使用
    const userModel = new User({user, type, pwd: md5Pwd(pwd)});
    userModel.save(function (e, d) {
      if (e) {
        return res.json({code: 1, msg: '后端出错了'})
      }
      const {user, type, _id} = d;
      // 必须写入cookie
      res.cookie('userId', _id);
      return res.json({code: 0, data: {user, type, _id}})
    })
    // User.create({user, type, pwd: md5Pwd(pwd)}, function (e, d) {
    //   if (e) {
    //     return res.json({code: 1, msg: '后端出错了'})
    //   }
    //   // 注册成功
    //   return res.json({code: 0})
    // })
  })
})
Router.get('/info', function (req, res) {
  // 读取用户 cookie
  const {userId} = req.cookies;
  if (!userId) {
    return res.json({code: 1})
  }
  User.findOne({_id: userId}, _filter, function (err, doc) {
    if (err) {
      return res.json({code: 1, msg: '后台cookie错误'})
    }
    return res.json({code: 0, data: doc})
  })
});

// 密码手动加密
function md5Pwd(pwd) {
  const salt = 'captern930211';
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router;