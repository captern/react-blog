import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'
// prop-types 是用来做类型检测的，防止掺入错误的数据类型  isRequired 表示是必传项目
class AvatarSelector extends React.Component {
  static propTypes = {
    selectAvatar: PropTypes.func
    // selectAvatar: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const avatarList = 'anger,chicken,dis,happy,sad,smile,zzz'.split(',').map(v => ({
      icon: require(`../img/${v}.png`),
      text: v
    }));
    const gridHeader = this.state.text ? (
      <div><span>已选择头像</span><img style={{width: 20}} src={this.state.icon} alt=""/></div>) : '请选择头像';
    return (
      <div>
        {/*默认为4个一行*/}
        <List renderHeader={() => gridHeader}>
          <Grid data={avatarList} columnNum={4} onClick={elm => {
            this.setState(elm)
            this.props.selectAvatar(elm.text)
          }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelector