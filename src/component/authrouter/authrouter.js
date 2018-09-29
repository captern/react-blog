import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

// react-router-dom 提供的一个组件，方便获取路由路径 使用 @withRouter 去触发
@withRouter
class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ['/login','/register'];
    // 获取当前页面路径
    const pathname = this.props.location.pathname
    // 如果当前用户为登录或者注册页面，则不跳转了
    if(publicList.indexOf(pathname)>-1){
      return null
    }
    // 获取用户信息
    axios.get('/user/info').then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          // 有登录信息的
        } else {
          // 未登录，跳转登录页面
          this.props.history.push('/login')
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