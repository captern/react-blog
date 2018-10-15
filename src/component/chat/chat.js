import React from 'react'
import {List, InputItem, NavBar, Icon, Grid} from 'antd-mobile'
import io from 'socket.io-client'
import {connect} from 'react-redux'
import {getMsgList, sendMsg, recvMsg} from '../../redux/chat.redux'
import {getChatId} from '../../util'

const socket = io('ws://localhost:9093');

@connect(
  state => state,
  {getMsgList, sendMsg, recvMsg}
)
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', msg: []}
  }

  // componentDidMount() {
  // this.props.getMsgList();
  // this.props.recvMsg()
  // socket.on('recvmsg', (data) => {
  //   this.setState({
  //     msg: [...this.state.msg, data.text]
  //   })
  // })
  // }
  // 进来页面刷新数据消失解决
  componentDidMount() {
    if (!this.props.chat.chatMsg.length) {
      this.props.getMsgList();
      this.props.recvMsg()
    }
  }

  // 官方修复 Grid 弹框显示不全
  fixCarousel() {
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  handleSubmit() {
    // socket.emit('sendmsg', {text: this.state.text});
    const from = this.props.user._id;
    const to = this.props.match.params.user;
    const msg = this.state.text;
    this.props.sendMsg({from, to, msg});
    this.setState({
      text: '',
      showEmoji: false
    })
  }

  render() {
    const emoji = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘'.split(' ').filter(v => v).map(v => ({
      // icon: '',
      text: v
    }));
    const userid = this.props.match.params.user;
    const Item = List.Item;
    const users = this.props.chat.users;
    if (!users[userid]) {
      return null
    }
    const chatId = getChatId(userid, this.props.user._id);
    const chatMsgs = this.props.chat.chatMsg.filter(v => v.chatId === chatId);
    return (
      <div id='chat-page'>
        <NavBar
          mode='dark'
          icon={<Icon type='left'/>}
          onLeftClick={() => {
            this.props.history.goBack()
          }}
        >
          {users[userid].name}
        </NavBar>
        {chatMsgs.map(v => {
          const avatar = require(`../img/${users[v.from].avatar}.png`);
          return v.from === userid ? (
            <List key={v._id}>
              <Item thumb={avatar}>{v.content}</Item>
              {/*<Item>{v.content}</Item>*/}
            </List>
          ) : (
            <List key={v._id}>
              <Item
                // extra={'avatar'}
                extra={<img src={avatar}/>}
                className='chat-me'
              >{v.content}</Item>
            </List>
          )
        })}
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder='请输入信息'
              value={this.state.text}
              onChange={v => {
                this.setState({text: v})
              }}
              extra={
                <div>
                  <span onClick={() => {
                    this.setState({
                      showEmoji: !this.state.showEmoji
                    })
                    this.fixCarousel()
                  }}>😁</span>
                  <span onClick={() => this.handleSubmit()}>发送</span>
                </div>
              }
            />
          </List>
          {this.state.showEmoji ?
            <Grid
              data={emoji}
              columnNum={9}
              carouselMaxRow={3}
              isCarousel={true}
              onClick={el => {
                this.setState({
                  text: this.state.text + el.text
                })
              }}
            /> : null}
        </div>
      </div>
    )
  }
}

export default Chat