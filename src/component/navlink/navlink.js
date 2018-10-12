import React from 'react'
import PropTypes from "prop-types";
import {TabBar} from 'antd-mobile'
// 不是路由组件，所以需要 withRouter 路由组件获取路由信息
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

@withRouter
@connect(
  state => state.chat
)
class NavLinkBar extends React.Component {
  // 定义组件传递参数的格式校验
  static propTypes = {
    data: PropTypes.array.isRequired
    // selectAvatar: PropTypes.func.isRequired
  };

  render() {
    const navList = this.props.data.filter(v => !v.hide);
    const {pathname} = this.props.location
    return (
      <TabBar>
        {navList.map(v => (
          <TabBar.Item
            badge={this.props.unread}           // 右上角未读信息展示
            key={v.path}
            title={v.text}
            icon={{uri: require(`../img/smile.png`)}}
            selectedIcon={{uri: require(`../img/chicken.png`)}}
            selected={pathname === v.path}
            onPress={() => {
              this.props.history.push(v.path)
            }}
          >

          </TabBar.Item>
        ))}
      </TabBar>
    )
  }
}

export default NavLinkBar