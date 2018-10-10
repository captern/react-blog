import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from "../usercard/usercard";


@connect(
  state => state.chatuser,
  {getUserList}
)
class Boss extends React.Component {
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
      <UserCard userList={this.props.userList}/>
    )
  }
}

export default Boss