import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'
import inputForm from '../../component/inputForm/inputForm'

// 高阶组件测试

function WrapperHello(Comp) {
  class WrapComp extends React.Component {
    render() {
      return (
        <div>
          <p>高阶组件特有的元素</p>
          <Comp{...this.props}></Comp>
        </div>
      )
    }
  }

  return WrapComp
}

@WrapperHello
class Hello extends React.Component {
  render() {
    return (
      <p>AAAAAAAAA</p>
    )
  }
}

@connect(
  state => state.user,
  {login}
)
@inputForm
class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: '',
    //   pwd: ''
    // };
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this)
  }

  register() {
    this.props.history.push('/register')
  }

  // handleChange(key, val) {
  //   this.setState({
  //     [key]: val
  //   })
  // }

  // 登录处理
  handleLogin() {
    this.props.login(this.props.state)
  }

  render() {
    return (
      <div>
        <Hello/>
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo/>
        {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
        <WingBlank>
          <List>
            <InputItem onChange={v => this.props.handleChange('user', v)}>用户</InputItem>
            <InputItem onChange={v => this.props.handleChange('pwd', v)} type='password'>密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button type='primary' onClick={this.handleLogin}>登录</Button>
          <WhiteSpace/>
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login