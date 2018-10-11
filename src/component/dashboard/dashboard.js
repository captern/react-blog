import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'

function Msg() {
  return <h2>消息头部</h2>
}

@connect(
  state => state
)
class DashBoard extends React.Component {
  render() {
    const {pathname} = this.props.location;
    const user = this.props.user;
    // boss查看牛人，牛人查看boss，互相反着来的
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: user.type === 'boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg,
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User,
      }
    ];
    return (
      <div>
        <NavBar className='fixd-header' mode='dard'>{navList.find(v => v.path === pathname).title}</NavBar>
        {/*<div style={{marginTop: 45}}>*/}
        <div>
          {navList.map(v => (
            <Route key={v.path} path={v.path} component={v.component}/>
          ))}
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

export default DashBoard