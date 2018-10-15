import React from 'react'
import {connect} from 'react-redux'
import {List} from 'antd-mobile'

@connect(
  state => state
)
class Msg extends React.Component {
  getLast(arr) {
    return arr[arr.length - 1]
  }

  render() {
    const Item = List.Item;
    const Brief = Item.Brief;
    const userId = this.props.user._id;
    const userInfo = this.props.chat.users;
    const msgGroup = {};
    this.props.chat.chatMsg.forEach(v => {
      msgGroup[v.chatId] = msgGroup[v.chatId] || [];
      msgGroup[v.chatId].push(v)
    })
    const chatList = Object.values(msgGroup);
    // 按照聊天用户分组，根据chatId
    return (
      <div>
        {
          chatList.map(v => {
            const lastItem = this.getLast(v);
            const targetId = v[0].from === userId ? v[0].to : v[0].from;
            const name = userInfo[targetId] ? userInfo[targetId].name : '';
            const avatar = userInfo[targetId] ? userInfo[targetId].avatar : '';
            return (
              <List key={lastItem._id}>
                <Item thumb={require(`../img/${avatar}.png`)}>
                  {lastItem.content}
                  <Brief>{name}</Brief>
                </Item>
              </List>
            )
          })
        }
      </div>
    )
  }
}

export default Msg

// Object.values({name:'captern',age:'24'})
// 将key去除 valus 组成一个数组