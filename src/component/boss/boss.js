import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatuser.redux'

@connect(
  state => state.chatuser,
  {getUserList}
)
class Boss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.props.getUserList('genius')
    // axios.get('/user/list?type=genius').then(res => {
    //   if (res.data.code === 0) {
    //     this.setState({data: res.data.data})
    //   }
    // })
  }

  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <WingBlank>
        <WhiteSpace/>
        {this.props.userList.map(v => (
          // 如果用户有头像，则返回，否则不展示
          v.avatar ? <Card key={v._id}>
            <Header
              title={v.user}
              // thumb={require(`../img/${v.avatar}.png`)}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            />
            <Body>
            {/*将换行符也保存下来*/}
            {v.desc.split('\n').map(v => (
              <div key={v}>{v}</div>
            ))}
            </Body>
          </Card> : null
        ))}
      </WingBlank>
    )
  }
}

export default Boss