import React from 'react'
import {NavBar, InputItem, TextareaItem} from 'antd-mobile'
import AvatarSelector from '../../component/avatarSelector/avatarSelector'

class BossInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    return (
      <div>
        <NavBar mode='dark'>Boss 完善信息</NavBar>
        <AvatarSelector selectAvatar={(imgname) => {
          this.setState({
            avatar: imgname
          })
        }}/>
        <InputItem onChange={(v) => this.onChange('title', v)}>招聘职位</InputItem>
        <InputItem onChange={(v) => this.onChange('company', v)}>公司名称</InputItem>
        <InputItem onChange={(v) => this.onChange('money', v)}>职位薪资</InputItem>
        <TextareaItem onChange={(v) => this.onChange('desc', v)} rows={3} autoHeight title='职位简介'/>
      </div>
    )
  }
}

export default BossInfo