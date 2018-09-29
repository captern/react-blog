import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatPwd: '',
      type: 'genius'
    }
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister(){
    console.log(this.state)
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo/>
        <h2>注册页面</h2>
        <List>
          <InputItem onChange={v => this.handleChange('user', v)}>用户名</InputItem>
          <InputItem onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
          <InputItem onChange={v => this.handleChange('repeatPwd', v)}>确认密码</InputItem>
          <RadioItem
            checked={this.state.type === 'genius'}
            onChange={()=>this.handleChange('type','genius')}
          >牛人</RadioItem>
          <RadioItem
            checked={this.state.type === 'boss'}
            onChange={()=>this.handleChange('type','boss')}
          >Boss</RadioItem>
          <WhiteSpace/>
          <Button type='primary' onClick={this.handleRegister}>注册</Button>
        </List>
      </div>
    )
  }
}

export default Register