import React from 'react'
import axios from 'axios'

class AuthRoute extends React.Component {
  componentDidMount() {
    // 获取用户信息
    axios.get('/user/info').then(res => {
      if (res.status === 200) {
        if(res.data.code === 0){
          // 有登录信息的
        }else{
          console.log(this.props.history)
        }
        console.log(res.data)
      }
    })
    // 是否登录
    // 现在的url地址   login 不需要跳转
    // 用户的type   身份是boss还是牛人
    // 用户是否完善信息（选择投降，个人简介）
  }

  render() {
    return null
  }
}

export default AuthRoute